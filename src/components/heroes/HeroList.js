import React, { useMemo } from 'react';
import  GetCountriesAll  from '../../selectors/getCountriesAll';
import { CountryCard } from './HeroCard';
import './coutriesList.css'

export const HeroList = (props) => {
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
