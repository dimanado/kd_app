import React from 'react';
import { withFormik } from 'formik';
import { Button } from 'react-bootstrap';
import { Form } from 'formik';
import FieldGroup from 'FieldGroup';
import SelectField from 'SelectField';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';
import User from 'User';
import Config from 'config';

const CreateCompanyForm = withFormik({
  mapPropsToValues: (props) => ({ title: '', ownership_type_id: '1', company_type_id: '1', comp_type: '', status: '' }),

  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    comp_type: Yup.string()
      .required('Comp type is required'),
    status: Yup.string()
      .required('Status is required')
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    Api.createCompany(User.getUserInfo().id, values, Auth.getUserTokens())
    .then(({data, headers}) => {

      props.handleSubmit();
    })
    .catch(({response}) => {
      if (response) {
        setErrors(response.data.errors);
      }
    })
    .then(() => {
      setSubmitting(false);
    });
  },

  displayName: 'CreateCompanyForm'
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
        id="formControlsCompType"
        label="Company type"
        name="comp_type"
        value={values.comp_type}
        error={touched.comp_type && errors.comp_type}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldGroup
        id="formControlsCompType"
        label="Status"
        name="status"
        value={values.status}
        error={touched.status && errors.status}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SelectField
        id="formControlsCompanyTypeId"
        label="Company Type"
        name="company_type_id"
        value={values.company_type_id}
        error={touched.company_type_id && errors.company_type_id}
        options={Config.companyTypes}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SelectField
        id="formControlsOwnershipType"
        label="Ownership Type"
        name="ownership_type_id"
        value={values.ownership_type_id}
        error={touched.ownership_type_id && errors.ownership_type_id}
        options={Config.ownershipTypes}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button type="submit" disabled={isSubmitting}>
        Create
      </Button>
    </Form>
  );
});

export default CreateCompanyForm;
