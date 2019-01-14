export const location = "Bogota,co";
const api_key = "217639f6498625408c6559d4d182dabb";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";


export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;