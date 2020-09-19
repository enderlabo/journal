import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { JournalScreen } from '../components/Journal/JournalScreen';
import { AuthRoutes } from './AuthRoutes';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { Loading } from '../components/Loading/Loading';


export const AppRoutes= () => {

    const dispatch = useDispatch();
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( user => {
            //method to use the firebase observable and keep the state information.
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                //Validate auth for protected routes.
                setIsLoggedIn( true )
            } else {
                setIsLoggedIn( false );
            }
            //Check when the user is auth
            setChecking(false);
        })

    }, [dispatch, setChecking, setIsLoggedIn])


    if( checking ) {
        return(

            <Loading />
        )
    }

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        {/* Protected routes with Auth */}
                        {
                            isLoggedIn ? (
                                <>
                                
                                    <Route exact path="/" component={ JournalScreen } />
                                
                                    <Redirect to="/" />
                                </>
                            ) :
                                (
                                    <>
                                    <Route path="/auth" component={ AuthRoutes } />
                            
                                    <Redirect to="/auth/login" />
                                </>
                                )
                        }
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

