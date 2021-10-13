import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './index.css'

const SearchBar = ({handleClick}) => {
    return(
        <div className="search">
            <input type="text" className="search--input" placeholder="Busque por uma Cidade"></input>
            <a herf="/" onClick={()=>handleClick()} className="search--button"><FaSearch/></a>
        </div>
    )
}

export default SearchBar