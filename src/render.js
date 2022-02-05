const render = (locaition, current) => {
  document.getElementById('wrapper').insertAdjacentHTML(
    'beforeend',
    `
      <div class="main">
      
      <div class="main__item">
      <div>Location: ${locaition.name}<div>
      <div>Region: ${locaition.region}<div>
      <div>Country: ${locaition.country}</div>
      <div>Localtime: ${locaition.localtime}</div>
      <div>
      
      <hr>
      
      <div class="main__item">
      <div>Gust: ${current.gust_kph} kph</div>
      <div>Last updated: ${current.last_updated}</div>
      <div>Сurrent temperature: ${current.temp_c}°C</div>
      <div>Сurrent temperature: ${current.temp_f}°F</div>
      <div>
      
      <hr>
      
      <div class="main__item">
      <div><img src="${current.condition.icon}" alt="rain"></div>
      <div>${current.condition.text}</div>
      <div>
      
      <hr>
      
      <div class="item">
      <div>Wind: ${current.wind_mph}mph</div>
      <div>Wind: ${current.wind_kph} kph</div>
      <div>Humidity: ${current.humidity}%</div>
      <div>Cloud: ${current.cloud}%</div>
      <div>
      
      <div>
      
      `,
  );
};

export default render;
