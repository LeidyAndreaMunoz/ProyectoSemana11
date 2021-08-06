import React, {useState, useEffect} from 'react'
import { ContryList } from '../contries/ContryList';
import { Search } from './Search'
import './countries.css'

export const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = (search) => {
        setLoading(true)
        let API_URL = 'https://restcountries.eu/rest/v2/all'
        if (search) API_URL =  `https://restcountries.eu/rest/v2/name/${search}`
        fetch(API_URL)
        .then((resp) => resp.json())
        .then((response) => {
            setData(response)
            setLoading(false)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Busqueda de países </h1>
            <Search getData={getData}/>
            <hr />
            {!loading ? <ContryList data={data}/> : 
                <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            }
   
        </div>
    )
}


export default HomePage