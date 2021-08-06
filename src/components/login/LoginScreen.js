import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Form } from 'semantic-ui-react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Link } from "react-router-dom";
import './LoginScreen.css';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );
    const handleLogin = (formData) => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        const actualUsers = JSON.parse(localStorage.getItem('users'))
        if (actualUsers === null) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'No existe ningun usurio, ¿Desea crear uno?',
                showCancelButton: true,
                confirmButtonColor: '#242330',
                confirmButtonText: '<a href="/register">Regístrate</a>'
              })
        } else {
            const existUser = actualUsers.find((user) => user.email === formData.email && user.password === formData.password)
            if (existUser) {
                dispatch({
                    type: types.login,
                    payload: existUser
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Usuario no registrado',
                    showCancelButton: true,
                    confirmButtonColor: '#242330',
                    confirmButtonText: '<a href="/register">Regístrate</a>'
                  })
            }
        }



        history.replace( lastPath );
        
    }
    const toRegister = (e) => {
        e.preventDefault();
        history.replace('/register');
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email invalido").required("Campo requerido"),
            password: Yup.string().required("Campo requerido"),
        }),
        onSubmit: (formData) => {
            handleLogin(formData)
        },
    })
     
    return (
            <div className="loginContainer">
                <h3>Inicia Sesión</h3>
                <Form className="formulario" onSubmit={formik.handleSubmit}>
            
                        <Form.Input
                            label="Email"
                            id="email"
                            onChange={formik.handleChange}
                            error={formik.errors.email}
                            type="text" 
                            name="email" 
                         />
                         <Form.Input
                            label="Contraseña"
                            id="password"
                            onChange={formik.handleChange}
                            error={formik.errors.password}
                            type="password" 
                            name="password" 
                         />
                    <p className="full">
                        <button type="submit" className="boton-enviar" >Ingresar</button>
                    </p>
                    <p className="full">
                        <button type="submit" className="boton-enviar" onClick={toRegister} >Registrarse</button>
                    </p>
                </Form>
                <p className="gocontact">
                    ¿Tienes algo por decirnos?  <Link to='/contacto' class="text-reset">Contáctanos</Link>.
                </p>
                
            </div>
    )  
}