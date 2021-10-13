import React from 'react'
import './index.css'
import SearchBar from '../Search'
import {FaCloud} from 'react-icons/fa'

const Header = ({handleClick}) => {
    return(
        <div className="header">
            <div className="header--logo">
                <a href="#">
                    <FaCloud style={{fontSize:40, color:'white'}}/> <p>Weather Today</p>
                </a>
            </div>
            <SearchBar handleClick={handleClick}/>
        </div>
    )
}

export default Header