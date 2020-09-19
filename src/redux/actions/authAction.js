import { types } from "../../types/types"
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";


//Task async
export const startLoginEmailPass = ( email, password ) => {

        return ( dispatch ) => {
            
            firebase.auth().signInWithEmailAndPassword( email, password ).then(  ({ user }) => {
            
              dispatch( 
                  login(
                      user.uid, user.displayName
                  ) )
            })
            .catch( err => {
                console.log(err)
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
            console.log(err);
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