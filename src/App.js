import React from 'react';
import Info from './components/info';
import FormWeather from './components/form';
import Weather from './components/weather';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const API_KEY = "5001c5c4ca26376aeb6215ed4724be97";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #44b2ce;
`;

const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
    loading: false
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      if (data.cod !== "404") {
        var sunset = data.sys.sunset;
        var date = new Date();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: undefined
        });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Enter valid city name!"
        })
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Enter valid city name!"
      })
    }
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <MainDiv>
        <Div>
          <Info />
          <FormWeather
            weatherMethod={this.gettingWeather}
            city={this.state.city}
            error={this.state.error}
          />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            sunset={this.state.sunset}
            error={this.state.error}
          />
          {
              this.state.loading && <Spinner className="loading_spinner"
              color="warning" />
          }
        </Div>
      </MainDiv>
    );
  }
}

export default App;
