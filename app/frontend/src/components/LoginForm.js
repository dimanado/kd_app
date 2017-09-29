import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'FieldGroup';

const LoginForm = ({
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

    <Button type="submit" onClick={onFormSubmit}>
      Login
    </Button>
  </Form>
);

export default LoginForm;
