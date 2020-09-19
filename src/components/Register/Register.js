import React from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeErr, setErr } from '../../redux/actions/uiAction';
import { startRegisterEmailPass } from '../../redux/actions/authAction';

export const RegisterScreen = () => {

    const [ formValues, handleInputRegister ] = useForm({
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    console.log(msgError);
    
    const { name, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();

       if( isFormValid() ){
           dispatch( startRegisterEmailPass( email, password, name ) )
         } 
            
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setErr('Name is required') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setErr('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setErr('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeErr() );
       return true;

    }

    return (
        <>
           <h3 className="auth__title">Sign Up</h3>

           <form onSubmit={ handleRegister }>

            { 
                msgError &&
                <div className="auth__alert-error">
                        { msgError }
                </div>
            }

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
                    autoComplete="off"
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
