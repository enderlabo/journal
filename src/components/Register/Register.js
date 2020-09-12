import React from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { removeErr, setErr } from '../../redux/actions/uiAction';
import { uiReducer } from '../../redux/reducers/uiReducer';

export const RegisterScreen = () => {

    const [ formValues, handleInputRegister ] = useForm({
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const dispatch = useDispatch();
    
    const { name, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();

        isFormValid();
            
    }

    const isFormValid = () => {
        switch ( false ) {
            case( !validator.isEmpty( name ) ):
                return dispatch( uiReducer({
                    msgErr: 'The Name is required'
                }) )

            case ( validator.isEmail( email ) ):
                return dispatch( setErr({
                    msgErr: 'The Email is required'
                }) )
        
            case( validator.isLength( password, { min: 6, max: 20 } )):
                return dispatch( setErr({
                    msgErr: 'The Password must not be less than 6 characters'
                }) )

            case( password === password2):
                return dispatch( setErr({
                    msgErr: 'The Password are not the same'
                }) )

            default:
                return false;
        }

        dispatch( removeErr() );
    }

    return (
        <>
           <h3 className="auth__title">Sign Up</h3>

           <form onSubmit={ handleRegister }>

            <div className="auth__alert-error">
                Please refill all fields
            </div>

                    <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={ name }
                    onChange={ handleInputRegister }
                    />

                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputRegister }
                    />


                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputRegister }
                    />

                    <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputRegister }
                    />

                    <button type="submit" 
                    className="btn btn-primary btn-block"
                    style={{ marginBottom: 20 }}
                    // disabled={ true }
                    >
                        Register
                    </button>
            

                <Link className="link" to="/auth/login">
                    Already Registered?
                </Link>

           </form>         
        </>
    )
}
