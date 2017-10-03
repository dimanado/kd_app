import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'FieldGroup';

const ProfileForm = ({
  onFormSubmit,
  onChange,
  errors,
  user,
  }) => (
  <Form>
    <FieldGroup
      id="formControlsFirstName"
      name="firstName"
      type="input"
      label="First name"
      value={user.firstName}
      onChange={onChange}
    />
    <FieldGroup
      id="formControlsLastName"
      name="lastName"
      label="Last Name"
      type="input"
      value={user.lastName}
      onChange={onChange}
    />

    <Button type="submit" onClick={onFormSubmit}>
      Save
    </Button>
  </Form>
);

export default ProfileForm;
