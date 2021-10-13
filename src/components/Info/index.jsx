import React from 'react'
import './index.css'
import image1 from '../../data/image1.jpg'
import image2 from '../../data/image2.jpg'
import image3 from '../../data/image3.jpg'
import image4 from '../../data/image4.jpg'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

const Info = ({weatherInfo, changeFunction}) => {

    const images = [image1,image2,image3,image4]
    let randNum = Math.round(Math.random() * (images.length - 1))
    let randomImage = images[randNum]

    return(
        <div className="infoContainer">
            <div className="infoContainer--imageContainer">
                <div className="gradient"><img src={randomImage} alt="" /></div>
            </div>
            <FaAngleLeft onClick={()=>changeFunction()} className="angleLeft"/>
            <div className="infoContainer--dataContainer">
                <h3>{weatherInfo.name}, {weatherInfo.sys.country}</h3>
                <img alt="weather" src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}/>
                <h3>{Math.round(weatherInfo.main.temp - 273.07)}°C</h3>
                <div className="infoContainer--minMax">
                    <p>{Math.round(weatherInfo.main.temp_min - 273.07)}°C</p>
                    <p>{Math.round(weatherInfo.main.temp_max - 273.07)}°C</p>
                </div>
                <p>{weatherInfo.weather[0].main} - {weatherInfo.weather[0].description}</p> 
            </div>
            <FaAngleRight onClick={()=>changeFunction()} className="angleRight"/>
        </div>
    )
}

export default Info