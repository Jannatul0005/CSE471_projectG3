const axios = require('axios');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'weather.html'));
});
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
  params: {q: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}