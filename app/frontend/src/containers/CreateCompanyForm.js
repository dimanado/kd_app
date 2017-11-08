import React from 'react';
import { withFormik } from 'formik';
import { Button, Checkbox } from 'react-bootstrap';
import { Form } from 'formik';
import FieldGroup from 'FieldGroup';
import SelectField from 'SelectField';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';
import Config from 'config';

const CreateCompanyForm = withFormik({
  mapPropsToValues: (props) => {
    let company = {};
    if(props.company) {
      company = props.company
    } else {
      company = {
        title: '',
        ownershipTypeId: '1',
        companyTypeId: '1',
        status: 0,
        userStatus: '',
        is_sole: false
      }
    }
    return company;
  },

  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    userStatus: Yup.string()
      .required('You Status in Company is required'),
    status: Yup.string()
      .required('Status is required')
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    values.status = parseInt(values.status, 10);

    Api.createCompany(props.userId, values, Auth.getUserTokens())
    .then(({data, headers}) => {
      setSubmitting(false);

      props.handleSubmit(data);
    })
    .catch(({response}) => {
      setSubmitting(false);

      if (response) {
        setErrors(response.data.errors);
      }
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
      <h2>Create company</h2>
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
        id="formControlsName"
        label="You Status in Company"
        placeholder="you status"
        name="userStatus"
        value={values.userStatus}
        error={touched.userStatus && errors.userStatus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SelectField
        id="formControlsStatus"
        label="Company Status"
        name="status"
        value={values.status}
        error={touched.status && errors.status}
        options={Config.companyStatuses}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SelectField
        id="formControlsCompanyTypeId"
        label="Company Type"
        name="companyTypeId"
        value={values.companyTypeId}
        error={touched.companyTypeId && errors.companyTypeId}
        options={Config.companyTypes}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SelectField
        id="formControlsOwnershipType"
        label="Ownership Type"
        name="ownershipTypeId"
        value={values.ownershipTypeId}
        error={touched.ownershipTypeId && errors.ownershipTypeId}
        options={Config.ownershipTypes}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Checkbox name="is_sole" value={values.is_sole}>
        is sole?
      </Checkbox>

      <Button type="submit" disabled={isSubmitting}>
        { self.props.company ? 'Create' : 'Update' }
      </Button>

      <Button>
        Destroy
      </Button>
    </Form>
  );
});

export default CreateCompanyForm;
