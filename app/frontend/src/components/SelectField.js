import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default function SelectField({ id, label, error, options, ...props }) {
  return (
    <FormGroup controlId={id} validationState={error && "error"}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" placeholder={label} {...props}>
        {Object.keys(options).map((key) => {
          return (<option value={key} key={key}>{options[key]}</option>)
        })}
      </FormControl>
        {error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};