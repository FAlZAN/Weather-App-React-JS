import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import CurrentWrapper from "./component/CurrentWrapper";
import HourlyWrapper from "./component/HourlyWrapper";
import DailyWrapper from "./component/DailyWrapper";
import DetailWrapper from "./component/DetailWrapper";
import Footer from "./component/Footer";
//global state
import { useCurrentCity } from "./Store/Store";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [currentData, setCurrentData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [details, setDetails] = useState([]);
  //global state
  const { currentCity } = useCurrentCity();
  const { UPDATECURRENTCITY } = useCurrentCity();

  //Getting coords of current location to get first data to render
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let coords = `${lat}, ${lon}`;
      UPDATECURRENTCITY(coords);
    });
  }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${currentCity}&days=7&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        fetchCurrentData(data);
        fetchHourlyData(data);
        fetchDailyData(data);
      });
  }, [currentCity]);

  function fetchCurrentData(data) {
    let location = data.location.name;
    let currentTemp = Math.ceil(data.current.temp_c);
    let currentCondition = data.current.condition.text;
    let currentHighPossible = Math.ceil(
      data.forecast.forecastday[0].day.maxtemp_c
    );
    let currentLowPossible = Math.ceil(
      data.forecast.forecastday[0].day.mintemp_c
    );
    let currentRealFeel = Math.ceil(data.current.feelslike_c);

    let currentData = {
      location: location,
      temp: currentTemp,
      condition: currentCondition,
      dayHigh: currentHighPossible,
      dayLow: currentLowPossible,
      realFeel: currentRealFeel,
    };

    setCurrentData(currentData);

    let details = [
      {
        title: "Percipitation",
        value: `${data.current.precip_mm} mm`,
      },
      {
        title: `${data.current.wind_dir} Wind`,
        value: `${data.current.wind_kph} km/h`,
      },
      {
        title: "Humidity",
        value: `${data.current.humidity}%`,
      },
      {
        title: "Visibility",
        value: `${data.current.vis_km} km`,
      },
      {
        title: "UV",
        value:
          data.current.uv <= 2
            ? "Low"
            : data.current.uv <= 5
            ? "Moderate"
            : data.current.uv <= 7
            ? "High"
            : data.current.uv <= 10
            ? "Very High"
            : "Extreme",
      },
      {
        title: "Pressure",
        value: `${data.current.pressure_mb} hPa`,
      },
    ];

    setDetails(details);
  }

  function fetchHourlyData(data) {
    const currentHour = new Date().toString().split(" ")[4].split(":")[0];
    const hourly_data = data.forecast.forecastday[0].hour;
    const hourly_data_sliced = hourly_data.slice(currentHour);
    const hourly_data_spliced = hourly_data.splice(0, currentHour);
    const custom_hourly_data = [...hourly_data_sliced, ...hourly_data_spliced];

    setHourlyData(custom_hourly_data);
  }

  function fetchDailyData(data) {
    const D = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daily_data = data.forecast.forecastday;
    const alter_data = [];

    for (let count = 0; count < daily_data.length; count++) {
      const data = daily_data[count];
      const date = Math.ceil(data.date.split("-")[2]);
      const month = months[D.getMonth(data.date)];

      const day = `${month} ${date}`;
      const icon = data.day.condition.icon;
      const condition = data.day.condition.text;

      alter_data.push({ day, icon, condition });

      // console.log(daily_data[count].date);
    }

    setDailyData(alter_data);
  }

  return (
    <div className="App">
      <Header location={currentData.location} />
      <main>
        <CurrentWrapper currentData={currentData} />
        <HourlyWrapper hourlyData={hourlyData} />
        <DailyWrapper dailyData={dailyData} />
        <DetailWrapper details={details} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
