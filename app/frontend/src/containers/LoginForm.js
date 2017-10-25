import React from 'react';
import { withFormik } from 'formik';
import { Button } from 'react-bootstrap';
import { Form } from 'formik';
import FieldGroup from 'FieldGroup';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';
import User from 'User';

const LoginForm = withFormik({
  mapPropsToValues: (props) => ({ email: '', password: '' }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be at least 8 symbols')
      .required('Password is required')
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.loginUser(values)
    .then(({data, headers}) => {
      Auth.setUserTokens(headers);
      User.setUserInfo(data.data);
      setSubmitting(false);

      props.handleSubmit();
    })
    .catch(({response}) => {
      setErrors({
        email: true,
        password: response.data.errors
      });
      setSubmitting(false);
    });
  },

  displayName: 'LoginForm'
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
        id="formControlsEmail"
        label="Email address"
        type="email"
        placeholder="email@example.com"
        name="email"
        value={values.email}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsPassword"
        label="Password"
        type="password"
        name="password"
        value={values.password}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </Form>
  );
});

export default LoginForm;
