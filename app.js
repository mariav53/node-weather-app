const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
  location:{
    alias: 'l',
    desc: 'City location',
    demand: true
  }
}).argv;

let getInfo = async (location) => {
  try {
    let coords = await place.getCoords(location);
    let temp = await weather.getWeather(coords.lat, coords.lng);

    return `The temperature in ${coords.location} is ${temp}ºC`;

  } catch (e) {
    return `Weather not found for ${location}`;
  }
}

getInfo(argv.location)
  .then(message => console.log(message))
  .catch(e => console.log(e));
