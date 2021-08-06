import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './coutriesList.css'
export const HeroScreen = ({ history }) => {

    const { name } = useParams();
    const [country, setCountry] = useState({})

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}` )
        .then((resp) => resp.json())
        .then((response) => {
            setCountry(response[0])
        })
    }, [])


    if ( !country ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }


    const {
        region,
        capital,
        nativeName,
        population,
        characters,
        flag,
        subregion,
    } = country;
    
    return (
        <div className="row mt-5">
            <div className="col-12 loading">
                <img 
                    src={ flag}
                    alt={ flag }

                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-12 animate__animated animate__fadeIn">
                <h3> { name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Region: </b> { region } </li>
                    <li className="list-group-item"> <b> Capital: </b> { capital } </li>
                    <li className="list-group-item"> <b> Poblacion: </b> { population } </li>
                    <li className="list-group-item"> <b> Nombre nativo: </b> { nativeName } </li>
                    <li className="list-group-item"> <b> Sub region </b> { subregion } </li>
                    

                </ul>
                <br />

                <button 
                    className="btn btn-outline-info col-12  "
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
