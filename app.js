const request = require('postman-request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const WEATHER_URL = "http://api.weatherstack.com/current?access_key=1386bca768660f3887d5931fe7edbc80&query=37.8267,-122.4233&units=f"
// const GEO_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWJodWl5YW45OSIsImEiOiJja21nOTBkZTkweHp0MndwcXZoZjVueTBxIn0.EPZLXDDJOBA5InyvxTKNBA&limit=1"

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


// geocode('Miami', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

