const API_KEY = '3c3964a73715d4ba1a6a3cc03ea85275'
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'

const apiFetch = async (reqParams) => {
    let req = await fetch(`${API_BASE}${reqParams}`)
    let json = await req.json()
    return json
}

const WeatherCalls = {
    getWeatherById: async (name) => {
        let weatherInfo = {}
        weatherInfo = await apiFetch(`?q=${name}&appid=${API_KEY}`)
        return weatherInfo
    }
}

export default WeatherCalls