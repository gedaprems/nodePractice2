const request = require('request')
const {weatherStackApiToken, maxboxApiToken } = require('./node_modules/apiToken')

// const url = 'http://api.weatherstack.com/current?access_key='+weatherStackApiToken+'&query=37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {

//     if(error){
//         console.log("Unable to connect to weather service!")
//     }else if(response.body.error){
//         console.log("Unable to find the location!")
//     }else{
//         // added json: true in the object { url: url, json: true}
//         const temp = response.body.current.temperature;
//         const feelslike = response.body.current.feelslike
//         const weatherCondition = response.body.current.weather_descriptions[0]

//         console.log(weatherCondition+". It is currently "+temp+" out. It feelslike "+feelslike+" degree out.")
//     }
// })



// geocoding


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chandrapur.json?access_token='+maxboxApiToken+'&limit=1'

request({url:url, json: true}, (error,response)=>{

    if(error){
        console.log("Unable to connect to location service!")
    }else if(response.body.features.length === 0){
        console.log("Unable to find the location, Try another search.")
    }    
    else{
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]

        console.log("Longiture : ",longitude)
        console.log("Latitude : ",latitude)
    }

})
