const request = require('postman-request');

const WEATHER_URL = "http://api.weatherstack.com/current?access_key=1386bca768660f3887d5931fe7edbc80&query=37.8267,-122.4233&units=f"
const GEO_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWJodWl5YW45OSIsImEiOiJja21nOTBkZTkweHp0MndwcXZoZjVueTBxIn0.EPZLXDDJOBA5InyvxTKNBA&limit=1"

// request({ url: WEATHER_URL, json: true }, (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather forecast.")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         const current = response.body.current
//         console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.")
//     }
    
   
// }) 


request({ url:GEO_URL, json:true }, (error, response) => {
    if(error){
        console.log("Cannot connect to location services.")
    } else if(response.body.features.length === 0){
        console.log("Unable to find location.")
    } else {
            const longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            console.log("The latitude is " + latitude + ". The longitude is " + longitude + ".")
    }
})
