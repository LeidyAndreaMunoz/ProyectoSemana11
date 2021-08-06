import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { Search } from './Search'

 const TableResult = () => {

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
            <h1>Busqueda de Paises </h1>
            <Search getData={getData}/>
            <hr />
            {!loading ? (
                        <>
                        <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pais:</th>
                            <th scope="col">Region:</th>
                            <th scope="col">Capital:</th>
                            <th scope="col">Poblacion:</th>
                            <th scope="col">Nombre nativo</th>
                            <th scope="col">Sub region</th>
                            <th scope="col">Detalle</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? (
                            data.map((country, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{ country.name }</td>
                                <td>{ country.region }</td>
                                <td>{ country.capital }</td>
                                <td>{ country.population } </td>
                                <td>{ country.nativeName }</td>
                                <td>{ country.subregion }</td>
                                <td>
                                <Link to={ `./country/${ country.name }` }>
                                    Más...
                                </Link>
                                </td>
     
                            </tr>
                            ))
                        ): (
                            <tr>
                            <th scope="row">No hay informacion...</th>
                            <td></td>
                            <td></td>
                            <td> </td>
                            <td></td>
                            <td></td>
                        </tr>
                        )}
            
            
                        </tbody>
                    </table>
                    </>
            ) : 
                <h1 className="loading">Cargando...</h1>
            }
   
        </div>
    )
}

export default TableResult;