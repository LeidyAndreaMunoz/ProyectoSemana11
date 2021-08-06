import React, {useState} from 'react'


export const Search = (props) => {
    const {getData} = props

    const [input, setInput] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        getData(input)
    }
    return (
        <form onSubmit={(e) => handleSearch(e) }>
            <input 
                type="text"
                placeholder="Busca un país..."
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value) }
            />

            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
            >
                Buscar
            </button>
        </form>
    )
} 
