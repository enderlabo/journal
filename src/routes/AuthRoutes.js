import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { RegisterScreen } from '../components/Register/Register';
import { LoginScreen } from '../components/Login/LoginScreen';

export const AuthRoutes =() => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={ LoginScreen } />
                    <Route path="/auth/register" component={ RegisterScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
