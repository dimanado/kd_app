import React from "react";
import { withFormik } from "formik";
import { Button } from "react-bootstrap";
import { Form } from "formik";
import FieldGroup from "FieldGroup";
import Yup from "yup";
import Api from "Api";
import Auth from "Auth";
import User from "User";

export default withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: "",
    passwordConfirmation: ""
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 symbols")
      .required("Password is required"),
    passwordConfirmation: Yup.string()
      .min(8, "Password should be at least 8 symbols")
      .required("Password is required")
      .test({
        name: "password-match",
        exclusive: false,
        message: "Passwords do not match",
        params: {
          reference: Yup.ref("password").path
        },
        test: function(value) {
          return value === this.resolve(Yup.ref("password"));
        }
      })
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.signUpUser(values)
      .then(({ data, headers }) => {
        Auth.setUserTokens(headers);
        User.setUserInfo(data.data);

        props.handleSubmit();
      })
      .catch(({ response }) => {
        debugger;
        const errorText =
          response &&
          response.data &&
          response.data.errors &&
          response.data.errors.full_messages[0];
        setErrors({
          email: errorText
        });
      })
      .then(() => {
        setSubmitting(false);
      });
  },

  displayName: "SignUpForm"
})(props => {
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
      <FieldGroup
        id="formControlsPasswordConfirmation"
        name="passwordConfirmation"
        label="Confirm Password"
        type="password"
        value={values.passwordConfirmation}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" disabled={isSubmitting}>
        Sign Up
      </Button>
    </Form>
  );
});
