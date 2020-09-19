import { types } from "../../types/types"
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import { finishLoading, startLoading } from "./uiAction";

import Swal from 'sweetalert2';


//Task async
export const startLoginEmailPass = ( email, password ) => {

        return ( dispatch ) => {
            
            firebase.auth().signInWithEmailAndPassword( email, password ).then(  ({ user }) => {
            
                dispatch( startLoading() )
                
                dispatch( 
                    login(
                      user.uid, user.displayName,

                      dispatch (finishLoading() )
                    ) )
            })
            .catch( err => {
                dispatch (finishLoading() );
                // console.log(err)
                Swal.fire( 'Error', err.message, 'error' )
            })
            
        }
    }


export const startRegisterEmailPass = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password ).then( async ({ user }) => {
            //function to update the username when authentication is not used by google, github, among others.
          await user.updateProfile({ displayName: name })
        
          dispatch( 
              login(
                  user.uid, user.displayName
              ) )
        })
        .catch( err => {
            // console.log(err);
            Swal.fire( 'Error', err.message, 'question' )
        } )
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({user}) => {
            dispatch(
                login( user.uid, user.displayName )
            )
        })
    }
}

export const login = ( uid, displayName ) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
       await firebase.auth().signOut();

       dispatch( logout() );
    }
}

export const logout = () => ({

    type: types.logout
})