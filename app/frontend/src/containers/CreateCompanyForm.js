import React from 'react';
import { withFormik } from 'formik';
import { Button } from 'react-bootstrap';
import { Form } from 'formik';
import FieldGroup from 'FieldGroup';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';
import User from 'User';

const CreateCompany = withFormik({
  mapPropsToValues: (props) => ({ title: '', ownership_type_id: '1', company_type_id: '1', status: 'OK' }),

  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.createCompany(User.getUserInfo().id, values, Auth.getUserTokens())
    .then(({data, headers}) => {

      props.handleSubmit();
    })
    .catch(({response}) => {
      setErrors({
        title: true
      });
    })
    .then(() => {
      setSubmitting(false);
    });
  },

  displayName: 'CreateCompany'
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
        id="formControlsName"
        label="Title"
        placeholder="Company name"
        name="title"
        value={values.title}
        error={touched.title && errors.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsOwnershipType"
        label="Ownership type"
        name="ownership_type_id"
        value={values.ownership_type_id}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsCompanyType"
        label="Company type"
        name="company_type_id"
        value={values.ownership_type_id}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" disabled={isSubmitting}>
        Create
      </Button>
    </Form>
  );
});

export default CreateCompany;
