// http://api.weatherstack.com/current?access_key=1a4a80bacc0ba275f37c21d265194eb4&query=37.8267,-122.4233

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1a4a80bacc0ba275f37c21d265194eb4&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})