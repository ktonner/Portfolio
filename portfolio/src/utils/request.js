const axios = require("axios");
const apiUrl = "https://pixabay.com/api";
export const getPhotos = () =>
  axios.get(`${apiUrl}/?key=${[process.env.REACT_APP_APIKEY]}`);