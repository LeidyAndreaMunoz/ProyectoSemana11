import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import { Link } from 'react-router-dom';

export const RegisterScreen = ({ history }) => {
    const { dispatch } = useContext( AuthContext );
    const handleLogin = (formData) => {
        const actualUsers = JSON.parse(localStorage.getItem('users'))
        if (actualUsers) {
            actualUsers.push(formData)
            localStorage.setItem('users', JSON.stringify(actualUsers) )
            
        } else {
            localStorage.setItem('users', JSON.stringify([formData]))
        }
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: formData
        });

        history.replace( lastPath );
    

     
    }

    const formik = useFormik({
        initialValues: {
            name:"",
            email: "",
            password:"",
            repeatPassword:"",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email invalido").required("Campo requerido"),
            name: Yup.string().required("Campo requerido"),
            password: Yup.string().required("Campo requerido").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
            repeatPassword: Yup.string().required("Campo requerido").oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
        }),
        onSubmit: (formData) => {
            handleLogin(formData);
        },
    })
     
    return (
            <div className="loginContainer">
                <h3>Registra tus datos</h3>
                <Form className="formulario" onSubmit={ formik.handleSubmit }>
                <Form.Input
                            label="Usuario"
                            id="name"
                            onChange={formik.handleChange}
                            error={formik.errors.name}
                            type="text" 
                            name="name" 
                         />
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
                    <Form.Input
                            label="Repetir contraseña"
                            id="repeatPassword"
                            onChange={formik.handleChange}
                            error={formik.errors.password}
                            type="password" 
                            name="repeatPassword" 
                         />
                    <p className="full">
                        <button type="submit" className="boton-enviar">Regístrate</button>
                    </p>
                    <Link to='/login' className="boton-enviar" ><button type="submit">Volver</button> </Link>
                </Form>
                <p className="gocontact">
                    ¿Tienes algo por decirnos?  <Link to='/contacto' class="text-reset">Contáctanos</Link>.
                </p>
            </div>
    )  
}


