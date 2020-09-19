import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPass, startGoogleLogin } from '../../redux/actions/authAction';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );
    
    const [ formValues, handleInput ] = useForm({
        email: 'test@gmail.com',
        password: '123456'
    });
    
    //data from formS
    const { email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPass( email, password )  )
    }

    const handleGoogleLogin = () => {

        dispatch( startGoogleLogin() );
    }

    return (
        <>
           <h3 className="auth__title">Login</h3>

           <form onSubmit={ handleLogin }>
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInput }
                    />


                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInput }
                    />

                    <button type="submit" 
                    className="btn btn-primary btn-block"
                    disabled= { loading }
                    // disabled={ true }
                    >
                        Login
                    </button>
               

                    <div className="auth__social-networks">
                        <p>Login with Social Networks</p>

                        <div className="google-btn" 
                        onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Create New Account
                </Link>

           </form>         
        </>
    )
}