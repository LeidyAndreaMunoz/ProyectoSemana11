import React, {useState, } from "react";
import './ContactoScreen.css';
import { useFormik } from 'formik';
import { Container, Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";


export const ContactoScreen = () => {


    const [open, setOpen] = useState(false)

    const formSent = (e) => {
        e.preventDefault();
        setOpen(true);
    } 
    const formik = useFormik({
        initialValues: {
            name:"",
            email: "",
            subject: "",
            textarea:"",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email invalido").required("Campo requerido"),
            name: Yup.string().required("Campo requerido"),
            subject: Yup.string().required("Campo requerido").max(140),
            textarea: Yup.string().required("Campo requerido").max(500)
        }),
        onSubmit: (formData) => {
            formSent();
        },
    })
    return (
        <main className="contactContainer">
            <div className="formContact">
                <h3>Comunícate con nosotros</h3>
                {!open ? (
                <Form className="formulario" onSubmit={formik.handleSubmit}>
                    <Form.Input
                            label="Nombres y apellidos"
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
                            label="Asunto"
                            id="subject"
                            onChange={formik.handleChange}
                            error={formik.errors.subject}
                            type="text" 
                            name="subject" 
                         />  
                    <Form.TextArea
                            label="Mensaje"
                        
                            id="textarea"
                            onChange={formik.handleChange}
                            error={formik.errors.textarea}
                            type="textarea" 
                            name="textarea" 
                         />             
                <p className="full">
                    <button type="submit" className="boton-enviar">Enviar</button>
                </p>
                <Link to='/login' className="boton-enviar" ><button type="submit">Volver</button> </Link>
            </Form>
                ) : <div class="card" id="cardresponse">
                        <div class="card-body">
                        ¡Gracias por contactarnos! Pronto nos comunicaremos contigo
                        </div>
                        <Link to='/login' className="boton-enviar" id="backContact"><button type="submit">Volver</button> </Link>
                    </div> 
                }
            </div>
        </main>
    )  
}
