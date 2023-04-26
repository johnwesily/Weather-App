import React, { useState } from "react";
import axios from "axios";

function Input() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWeatherData(location) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=f49e5a2e41aa7ed1eb27efe7a011c025&q=${location}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handelChange(event) {
    setCity(event.target.value);
  }

  function HandelSubmit(event) {
    event.preventDefault();
    getWeatherData(city);
  }

  return (
    <div>
      <div className="tempinfo rounded container-fluid">
        <h2>Weather App</h2>
        {loading ? (
          <p1>Loading....</p1>
        ) : weatherData ? (
          <div>
            <h2>{weatherData.main.temp}°C</h2>
            <h2>{weatherData.name}</h2>
          </div>
        ) : (
          <p>Please enter a location to get the weather.</p>
        )}
      </div>

      <form>
        <div className="inputform rounded container-fluid">
          <input
            className="form-label rounded "
            name="location"
            placeholder="Enter City"
            value={city}
            onChange={handelChange}
            type="text"
          />
          <span> </span>
          <button onClick={HandelSubmit} className="btn btn-primary p-2">
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
