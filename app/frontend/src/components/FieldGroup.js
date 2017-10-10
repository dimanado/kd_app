import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({ id, label, error, ...props }) {
  return (
    <FormGroup controlId={id} validationState={error && "error"}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};
