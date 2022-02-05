import render from './render';

fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no')
  .then((response) => response.json())
  .then((data) => render(data.location, data.current));
