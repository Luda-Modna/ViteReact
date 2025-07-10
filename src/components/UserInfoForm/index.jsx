import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { USER_VALIDATION_SCHEMA } from './../../utils/validate/valsdationSchemas';

function UserInfoForm () {
  const userInitialValues = { firstName: ' ' };

  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          <label>
            {' '}
            <span>Name: </span>
            <Field name='firstName' type='text' placeholder='name' autoFocus />
            <ErrorMessage name='firstName' component='div' />
          </label>

          <button type='submit'>Save</button>
          <button type='reset' disabled={!formikProps.dirty}>
            Cansel
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserInfoForm;
