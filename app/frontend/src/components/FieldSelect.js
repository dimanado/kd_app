import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default function FieldSelect({ id, label, error, ...props }) {
  return (
    <FormGroup controlId={id} validationState={error && "error"}>
      <ControlLabel>{label}</ControlLabel>
      <Select {...props} />
      {error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};