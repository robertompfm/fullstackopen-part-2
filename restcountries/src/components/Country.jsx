import Weather from "./Weather"

const Country = ({country, weather}) => {
    if (!country) {
        return null
    }

    const { name, capital, area, languages, flags } = country

    return (
        <div>
            <h2>{name.common}</h2>
            <div>capital {capital && capital[0]}</div>
            <div>area {area}</div>
            <h3>languages:</h3>
            <ul>
                {languages && Object.entries(languages).map(([key, language]) => <li key={key}>{language}</li>)}
            </ul>
            <img src={flags.png} alt={flags.alt} />

            <Weather data={weather} />
        </div>
    )
}

export default Country