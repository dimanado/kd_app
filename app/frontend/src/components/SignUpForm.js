import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'FieldGroup';

const SignUpForm = ({
  onFormSubmit,
  onChange,
  errors,
  user,
}) => (
  <Form>
    <FieldGroup
      id="formControlsEmail"
      name="email"
      type="email"
      label="Email address"
      placeholder="email@example.com"
      value={user.email}
      onChange={onChange}
    />
    <FieldGroup
      id="formControlsPassword"
      name="password"
      label="Password"
      type="password"
      value={user.password}
      onChange={onChange}
    />
    <FieldGroup
      id="formControlsPasswordConfirmation"
      name="passwordConfirmation"
      label="Confirm Password"
      type="password"
      value={user.passwordConfirmation}
      onChange={onChange}
    />

    <Button type="submit" onClick={onFormSubmit}>
      Sign Up
    </Button>
  </Form>
);

export default SignUpForm;
