const axios = require('axios');

const getCoords = async(location) => {
  let encodedUrl = encodeURI( location );

  // esperamos a que la petición regrese y lo que obtengamos lo metemos en resp
  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`)

  if(resp.data.status === "ZERO_RESULTS"){
    throw new Error (`No resultas for ${location}`);
  }
  let loc = resp.data.results[0];
  let coords = loc.geometry.location;

  return {
    location: loc.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }
}

module.exports={
  getCoords
}
