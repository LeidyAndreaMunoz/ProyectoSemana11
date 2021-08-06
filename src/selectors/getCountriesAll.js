import React, { useState, useEffect } from 'react';

export const GetCountriesAll = (search) => {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        let API_URL = 'https://restcountries.eu/rest/v2/all'
        if (search) API_URL =  `https://restcountries.eu/rest/v2/name/${search}` 
        fetch(API_URL)
        .then((resp) => resp.json())
        .then((response) => {
            setData(response)
        })
        return data
    }, [search])
    return data

}
