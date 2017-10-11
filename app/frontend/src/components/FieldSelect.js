import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FieldSelect extends Component {
  handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.name, true);
  };

  render() {
    return (
      <FormGroup controlId={this.props.id} validationState={this.props.error && "error"}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <Select
          id={this.props.id}
          options={this.props.options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
      {this.props.error && <HelpBlock>{this.props.error}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default FieldSelect;