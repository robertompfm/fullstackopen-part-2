import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org'
const weatherUrl = `${baseUrl}/data/2.5/weather`
const imageUrl = `https://openweathermap.org/img/wn`
const apiKey = import.meta.env.VITE_SOME_KEY

const searchWeaterhByName = (name) => {
  return axios
    .get(`${weatherUrl}?q=${name}&units=metric&appid=${apiKey}`)
    .then(response => response.data)
}

const getImageUrl = (icon) => `${imageUrl}/${icon}@2x.png` 

export default {
  searchWeaterhByName,
  getImageUrl
}