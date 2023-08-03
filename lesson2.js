// Geo coding https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json

// Printing the latitude and longitude of the los angles. 

const request = require('request')
const tokenObj = require('./node_modules/apiToken')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token='+tokenObj.maxboxApiToken+'&limit=1'

request({url:url, json: true}, (error,response)=>{
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]

    console.log("Longiture : ",longitude)
    console.log("Latitude : ",latitude)

})
