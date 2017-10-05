import React from 'react';
import { Form, withFormik } from 'formik';
import { Button } from 'react-bootstrap';
import FieldGroup from 'FieldGroup';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';

const ProfileForm = withFormik({
  mapPropsToValues: (props) => ({ ...props.profile }),

  validationSchema: Yup.object().shape({
    firstName: Yup.string().matches(/^[a-zA-Z]*$/, 'First name should only have letters'),
    lastName: Yup.string().matches(/^[a-zA-Z]*$/, 'Last name should only have letters')
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    Api.profileUpdate(props.profile.userId, values, Auth.getUserTokens())
    .then((response) => {
      alert('Data updated.');
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      setSubmitting(false);
    });
  },

  displayName: 'ProfileForm'

})((props) => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    touched
    } = props;

  return (
    <Form>
      <FieldGroup
        id="formControlsFirstName"
        label="First name"
        type="input"
        name="firstName"
        value={values.firstName}
        error={touched.firstName && errors.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsLastName"
        label="Last name"
        type="input"
        name="lastName"
        value={values.lastName}
        error={touched.lastName && errors.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" disabled={isSubmitting}>
        Update
      </Button>
    </Form>
  );
});

export default ProfileForm;