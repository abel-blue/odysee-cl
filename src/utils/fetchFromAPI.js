const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10', maxResults: 50},
  headers: {
    'X-RapidAPI-Key': '7dd9d1469bmsh7dc0da7609fe390p1625c2jsn6e28f0a305bb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
