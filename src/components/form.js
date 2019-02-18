import React from 'react';
import {Form, Button, Input, FormFeedback} from 'reactstrap';
import '../scss/Form.scss';

class FormWeather extends React.Component {
  render() {
    return(
      <Form onSubmit={this.props.weatherMethod} className="main_form">
        <div className="input_city">
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.changeInputCity}
            valid={this.props.city}
            invalid={this.props.error}
          />
          <FormFeedback valid>Sweet! City Find!</FormFeedback>
          <FormFeedback invalid>Enter valid city name!</FormFeedback>
        </div>
        <br/>
        <Button color="success" className="btn_submit_form">Get Weather</Button>
      </Form>
    )
  }
}

export default FormWeather;
