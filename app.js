const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=1386bca768660f3887d5931fe7edbc80&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
    const current = response.body.current
    console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.")
})

