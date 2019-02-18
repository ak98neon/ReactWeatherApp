import React from 'react';
import {Form, FormGroup, Label, FormText, Button, Input, FormFeedback} from 'reactstrap';
import styled from 'styled-components';
import '../scss/Form.scss';

const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

class FormWeather extends React.Component {
  render() {
    return(
      <FormDiv onSubmit={this.props.weatherMethod}>
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
        <br/>
        <Button color="success" className="btn_submit_form">Get Weather</Button>
      </FormDiv>
    )
  }
}

export default FormWeather;
