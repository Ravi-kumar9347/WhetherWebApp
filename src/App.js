import React, { useState } from "react";
import "./App.css";
import { WhetherData } from "./components/Whether";
import hotArea from "./images/hotArea.jpg";
import coolArea from "./images/coolArea.jpg";
import WhetherDesp from "./components/WhetherDesp";
import { Alert, Button } from "react-bootstrap";
import cloud from "./images/cloud.png";
import sun from "./images/sun.png";
import moderate from "./images/moderate.png";

const Weather = () => {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [background, setBackground] = useState(hotArea);
  const [showAlert, setShowAlert] = useState(false);

  const fetchData = async () => {
    try {
      const data = await WhetherData(city);

      setWeatherData(data);

      const tempR = 20;
      if (data.temp.toFixed() - 273 <= tempR) {
        setBackground(coolArea);
      } else {
        setBackground(hotArea);
      }
    } catch (error) {
      setShowAlert(true);
    }
  };

  return (
    <div className="app">
      <div
        className="imageurl"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {showAlert && (
          <Alert
            variant="warning"
            onClose={() => setShowAlert(false)}
            dismissible
            className="fixed-top"
          >
            <strong>City Not Found!</strong> Please enter a valid city name
          </Alert>
        )}

        <div className={`container p-5 ${showAlert ? "mt-5" : ""}`}>
          <h3 className="mb-4 text-white">Weather App</h3>
          <div className="input-con mb-3 d-flex p-3">
            <input
              type="text"
              className="form-control bg-info me-2 text-white"
              placeholder="Enter city...."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Button className="btn btn-info" onClick={fetchData}>
              Get Weather
            </Button>
          </div>

          {weatherData && (
            <div className="container input-con">
              <div className="text-white row align-items-center">
                <div className="col-6  mb-md-0">
                  <div className="d-flex flex-column align-items-start p-2">
                    <div className="d-flex flex-row align-items-center">
                      <h3 className="mb-0">{`${weatherData.name}`}</h3>
                      <img
                        src={
                          weatherData.temp.toFixed() - 273 <= 15
                            ? cloud
                            : weatherData.temp.toFixed() - 273 > 15 &&
                              weatherData.temp.toFixed() - 273 <= 32
                            ? moderate
                            : sun
                        }
                        alt=""
                        className="img-fluid mb-2 small-image"
                      />
                    </div>
                    <p className="mb-0">{`${weatherData.description}`}</p>
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                  <h1 className="mb-0 text-lg">{`${
                    weatherData.temp.toFixed() - 273
                  }°C`}</h1>
                </div>
              </div>
            </div>
          )}

          {weatherData && (
            <div className="weather-desp-container">
              <WhetherDesp weatherData={weatherData}></WhetherDesp>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
