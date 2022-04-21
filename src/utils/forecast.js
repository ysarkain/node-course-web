const request = require('request')

const forecast = (lat, lon, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=93f438df3fe9179ad9cdef13100cedea&query=' + lat + ',' + lon + '&units=f'
    console.log('Location', lat, lon)
    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to access weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 'The current temperature is ' + body.current.temperature + ' degrees.  It feels like ' + body.current.feelslike + ' degrees.  The windspeed is ' + body.current.wind_speed + 
                'mph from the ' + body.current.wind_dir + '.' )
        }
    })
}

module.exports = forecast