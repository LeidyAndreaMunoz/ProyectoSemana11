import React from 'react';
import { CountryCard } from './CountryCard';
import './coutriesCard.css'

export const ContryList = (props) => {
    const {data} = props
    return (
        <div className="card-columns animate__animated animate__fadeIn">

        {data.length > 0 ? (
            data?.map( country => (
                <CountryCard 
                        key={ country.numericCode }
                        { ...country }
                    />
                
            ))

        ) :        
        <h1 className="loading">No hay informacion relacionada</h1>}

        </div>
    )
}
