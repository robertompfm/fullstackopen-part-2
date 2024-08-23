import { useState, useEffect } from "react"
import countryService from "./services/countries"
import weatherService from "./services/weather"

import Country from "./components/Country"
import Countries from "./components/Countries"
import Filter from "./components/Filter"

const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ allCountries, setAllCountries ] = useState(null)
  const [ countries, setCountries ] = useState(null)
  const [ country, setCountry ] = useState(null)
  const [ weather, setWeather ] = useState(null)

  const selectCountry = ({name, capital}) => {
    countryService
      .searchByName(name.common)
      .then(returnedCountry => {
        setCountry(returnedCountry)
      })

    if (capital.length) {
      weatherService
        .searchWeaterhByName(capital[0])
        .then(returnedData => {
          console.log(returnedData)
          setWeather(returnedData)
        })
        .catch(_error => {
          setWeather(null)
        })
    }
  }

  useEffect(() => {
    countryService
      .getAll()
      .then(returnedData => setAllCountries(returnedData))
  }, [])

  useEffect(() => {
    if (!allCountries || !filter) {
      setCountries(null)
      setCountry(null)
      
      return
    }

    const filteredCountries = allCountries.filter(({name}) => {
      const { common } = name

      return common.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    })

    if (filteredCountries.length === 1) {
      selectCountry(filteredCountries[0])
    } else {
      setCountry(null)
    }

    if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      setCountries(filteredCountries)
    } else {
      setCountries(null)
    }

  }, [filter])


  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Country country={country} weather={weather} />
      <Countries country={country} countries={countries} selectCountry={selectCountry} />
    </div>
  )
}

export default App