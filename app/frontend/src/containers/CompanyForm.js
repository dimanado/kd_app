import React from 'react';
import { Formik } from 'formik';
import CompanyFormFields from 'CompanyFormFields';
import Yup from 'yup';
import Api from 'Api';
import Auth from 'Auth';

const CompanyForm = props => {
  let initialValues = {};
  if (props.company) {
    initialValues = props.company;
  } else {
    initialValues = {
      title: '',
      ownershipTypeId: '1',
      companyTypeId: '1',
      status: 0,
      userStatus: '',
      isSole: false
    };
  }

  return (
    <div>
      <h2>{props.company ? 'Update' : 'Create'} company</h2>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required('Title is required'),
          userStatus: Yup.string().required(
            'You Status in Company is required'
          ),
          status: Yup.string().required('Status is required')
        })}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          values.status = parseInt(values.status, 10);

          Api.createCompany(props.userId, values, Auth.getUserTokens())
            .then(({ data, headers }) => {
              setSubmitting(false);

              props.handleSubmit(data);
            })
            .catch(({ response }) => {
              setSubmitting(false);

              if (response) {
                setErrors(response.data.errors);
              }
            });
        }}
        component={CompanyFormFields}
      />
    </div>
  );
};

export default CompanyForm;
