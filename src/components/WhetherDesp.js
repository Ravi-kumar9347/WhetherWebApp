import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop, MdCompress } from "react-icons/md";
import "./WhetherDesp.css"; // Import a separate CSS file for styling

function WhetherDesp({ weatherData }) {
  const tempUnit = "°C";
  const windUnit = "m/s";

  const dataSections = [
    {
      id: 1,
      icon: <AiOutlineArrowDown />,
      title: "Min",
      data: weatherData.temp_min.toFixed() - 273,
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <AiOutlineArrowUp />,
      title: "Max",
      data: weatherData.temp_max.toFixed() - 273,
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels Like",
      data: weatherData.feels_like.toFixed() - 273,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: weatherData.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weatherData.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind Speed",
      data: weatherData.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="mt-5 text-center responsive-div">
      <div className="row row-cols-2">
        {dataSections.map(({ id, icon, title, data, unit }) => (
          <div key={id} className="col mb-4">
            <div className="card input-con">
              <div className="card-body">
                <h5 className="card-title text-white">{icon} {title}</h5>
                <p className="card-text text-white">{`${data} ${unit}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhetherDesp;
