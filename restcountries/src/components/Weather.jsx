import weatherService from '../services/weather'

const Weather = ({data}) => {
    if (!data) {
        return null
    }
    
    const { main, weather, name, wind } = data

    console.log({main, weather, data, name, wind})

    const iconUrl =  weatherService.getImageUrl(weather[0].icon)

    return (
        <div>
            <h2>Weather in {name}</h2>
            <div>temperature {main.temp} Celcius</div>
            <img src={iconUrl} alt={weather[0].description} />
            <div>wind {wind.speed} m/s</div>
        </div>
    )

}

export default Weather