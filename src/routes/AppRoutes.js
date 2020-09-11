import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { JournalScreen } from '../components/Journal/JournalScreen';
import { AuthRoutes } from './AuthRoutes';


export const AppRoutes= () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/auth" component={ AuthRoutes } />
                        <Route exact path="/" component={ JournalScreen } /> 
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

