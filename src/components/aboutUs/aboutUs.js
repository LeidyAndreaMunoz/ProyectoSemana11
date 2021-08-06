import React from "react";
import './aboutUs.css';
import aboutPhoto from '../../assets/About.jpg';


export const AboutScreen = () => {

    return (
        <div className="card mb-3" id="aboutContainer">
            <div className="row g-0">
                <div id="aboutPhotoContainer" className="col-md-4">
                    <img id="aboutPhoto" src={aboutPhoto} className="img-fluid rounded-start" alt="Sobre me foto"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">¡Hola, soy Leidy Andrea!</h5>
                        <p className="card-text">Profesional en proceso de grado con estudios de profundización en inglés, francés, portugués, y dominio de herramientas de marketing y comunicación digital. Poseo altas capacidades de comunicación oral y escrita, potenciadas por un alto nivel de creatividad, una actitud extrovertida y apasionada, junto a un grado destacado de responsabilidad que potencia mi productividad. Siempre estoy dispuesta al conocimiento de nuevos espacios, la aceptación de nuevos retos y la sinergia con personas para un buen trabajo en equipo. Considero dentro de mis principales fortalezas una notable velocidad del aprendizaje y la disposición para liderar equipos de trabajo de manera optimizada para generar cambios positivos en la organización. Actualmente me encuentro aprendiendo y laborando en el área del desarrollo de Software con manejo de HTML5, CSS3 y JavaScript</p>
                        <div id="aboutButtons">
                            <a href="https://github.com/LeidyAndreaMunoz" target="_blank" className="btn btn-primary">Github</a>
                            <a href="https://www.linkedin.com/in/leidy-andrea-mu%C3%B1oz-hios-000571210/" target="_blank" className="btn btn-primary">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}
