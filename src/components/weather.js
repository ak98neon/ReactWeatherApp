import React from 'react';

const Weather = (props) => (
  <>
    {props.city &&
      <div>
        <p>Place: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp}</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
    }
  </>
);

export default Weather;
