const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=1386bca768660f3887d5931fe7edbc80&query=37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

