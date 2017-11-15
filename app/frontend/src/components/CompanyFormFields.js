import React from 'react';
import { Button, Checkbox } from 'react-bootstrap';
import { Form } from 'formik';
import FieldGroup from 'FieldGroup';
import SelectField from 'SelectField';
import Config from 'config';

const CompanyFormFields = ({
  values,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  touched
}) => {
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
      <Checkbox
        name="isSole"
        checked={values.isSole}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        Is Sole?
      </Checkbox>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>

      <Button>Destroy</Button>
    </Form>
  );
};

export default CompanyFormFields;
