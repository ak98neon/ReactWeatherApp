import React from 'react';
import { Alert } from 'reactstrap';

const Weather = (props) => (
  <div className="weather_component">
    {props.city &&
      <Alert color="success">
        <p>Place: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp}</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
      </Alert>
    }
  </div>
);

export default Weather;
