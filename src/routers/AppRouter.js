import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            {/* <div> */}
                <Switch> 
                    <PublicRoute
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen } 
                        isAuthenticated={ user.logged }
                    />
                    <PublicRoute 
                        exact 
                        path="/contacto" 
                        component={ ContactoScreen } 
                        isAuthenticated={ user.logged }
                    />
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            {/* </div> */}
        </Router>
    )
}
