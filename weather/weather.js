const axios = require('axios');

const getWeather = async (lat, lng) => {

  try {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ebd74d52a4bee5f55648721981aa9666`)
    return resp.data.main.temp;
    
  } catch (error) {
  console.error(error)
  }

}

module.exports ={
  getWeather
}
