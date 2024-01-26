const API_KEY = "58cd84d7fe3e687e12a4c8917908c3a3";

export const WhetherData = async (cityname) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    name,
  } = data;

  const { description } = weather[0];
  
  return {
    description,
    temp,
    feels_like,
    humidity,
    pressure,
    temp_max,
    temp_min,
    speed,
    name,
  };
};
