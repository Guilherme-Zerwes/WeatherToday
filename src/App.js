import React, {useState} from 'react'
import './App.css';
import WeatherCalls from './Weather';
import Info from './components/Info'
import Header from './components/Header';


function App() {
  const [weather, setWeather] = useState({})
  const [hasSent, setHasSent] = useState(false)
  const [error, setError] = useState(false)
  const cities = require('./data/city.list.json')

    const handleSearch = async () => {
      let searchTerm = document.querySelector('input').value
      //setHasSent(false)
      if (searchTerm !== '') {
        document.body.style.cursor = 'wait'
        let reqData = await WeatherCalls.getWeatherById(searchTerm)
        if(reqData.cod !== 200) {
          setError(true)
          return console.log('Não foi possível encontrar essa Cidade!',reqData.cod)
        }
        setWeather(reqData)
        setHasSent(true)
        document.body.style.cursor = 'default'
      } 
    }

    const handleChange = async () => {
      let randNum = Math.round(Math.random() * (cities.length - 1))
      let randCity = cities[randNum].name
      try {
        document.body.style.cursor = 'wait'
        let reqData = await WeatherCalls.getWeatherById(randCity)
        setWeather(reqData)
        setHasSent(true)
        document.body.style.cursor = 'default'
      } catch(error) {
        console.log(error)
      }
    }

  return (
    <div className="app">
      <div className="container">
        <Header handleClick={handleSearch}/>
        {hasSent && !error? (<Info weatherInfo={weather} changeFunction={handleChange}/>) : (<h1>Busque por uma cidade!</h1>)}
      </div>
    </div>
  );
}

export default App;
