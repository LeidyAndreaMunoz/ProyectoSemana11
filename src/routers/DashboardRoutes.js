import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from '../components/home/HomePage';
import { ContryScreen } from '../components/contries/ContryScreen';
import  TableResult  from '../components/TableResult/TableResult';
import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { AboutScreen } from '../components/aboutUs/aboutUs';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div  className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={ HomePage } />
                    <Route exact path="/country/:name" component={ ContryScreen } />
                    <Route exact path="/search" component={ TableResult } />
                    <Route exact path="/contacto" component={ ContactoScreen } />
                    <Route exact path="/registro" component={ RegisterScreen } />
                    <Route exact path="/about" component={ AboutScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
