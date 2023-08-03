// http://api.weatherstack.com/current?access_key=1a4a80bacc0ba275f37c21d265194eb4&query=37.8267,-122.4233

const request = require('request')
const {weatherStackApiToken, maxboxApiToken } = require('./node_modules/apiToken')

const url = 'http://api.weatherstack.com/current?access_key='+weatherStackApiToken+'&query=37.8267,-122.4233'

request({ url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current.weather_descriptions[0]+". It is currently "+data.current.temperature+" out. It feels like "+data.current.feelslike+" degress out.")
    
    // added json: true in the object { url: url, json: true}
    const temp = response.body.current.temperature;
    const feelslike = response.body.current.feelslike
    const weatherCondition = response.body.current.weather_descriptions[0]

    console.log(weatherCondition+". It is currently "+temp+" out. It feelslike "+feelslike+" degree out.")

})


