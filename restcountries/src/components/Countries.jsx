const Countries = ({country, countries, selectCountry}) => (
    <div>
        {!country && countries && countries.map(country => (
            <div key={country.name.common}>
                {country.name.common} <button onClick={() => selectCountry(country)}>show</button>    
            </div>
        ))}
    </div>
)


export default Countries
