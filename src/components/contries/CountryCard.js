import React from 'react';
import { Link } from 'react-router-dom';
import './coutriesCard.css'

export const CountryCard = ({
    flag,
    name,
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" id="cardsMain" style={ { maxWidth: 540 } }>
            <div className="row no-gutters" id="cardDtail" >
                <div className="col-md-4">
                    <img src={ flag} className="card-img" alt={ flag } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <Link to={ `./country/${ name }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
