import React, { useContext, useEffect, useState} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './NavBar.css';
import Logo from '../../assets/Logo.png';


export const Navbar = () => {
    
    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    
    const[show,setShow] = useState(false);
    useEffect (window.onscroll = () => {
        setShow(window.pageYOffset === 0 ? false : true);
    }, [])
    
    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }


    return (
        <nav  className={show ? "navbar navbar-expand-sm navbar-dark bg-dark stivkyHeader" : 'navbar navbar-expand-sm navbar-dark bg-dark'}>
            
            <Link className="logoContainer" 
                to="/"
            >
                <img src={Logo}></img>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                        { name }
                    </span>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/about"
                    >
                        Sobre me
                    </NavLink>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    > 
                        Salir
                    </button>
                </ul>
            </div>
        </nav>
    )
}