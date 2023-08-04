// callback abstraction 


const request = require('request')
const {weatherStackApiToken, maxboxApiToken } = require('./node_modules/apiToken')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// geocode function 


const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token='+maxboxApiToken+'&limit=1'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location service!',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find the location, Try another search.',undefined)
        }else{
            callback(undefined,{
                longitude : response.body.features[0].center[0], 
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })
}

geocode('new york',(error,data)=>{
    console.log(error, data)
})

// forecast function

const forecast = (longitude, latitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key='+weatherStackApiToken+'&query='+latitude+','+longitude

    request({url: url, json: true}, (error,response)=>{
        if(error){
            callback("Unable to connect to location service!", undefined)
        }
        else if(response.body.error){
            callback("Unable to find the location!", undefined)
        }else{
            const temp = response.body.current.temperature;
            const feelslike = response.body.current.feelslike
            const weatherCondition = response.body.current.weather_descriptions[0]

            callback(undefined, weatherCondition+". It is currently "+temp+" out. It feelslike "+feelslike+" degree out.")
        }
    })
}


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })