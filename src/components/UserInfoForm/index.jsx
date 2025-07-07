import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

function UserInfoForm() {
  const userInitialValues = { firstName: " " };

  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {(formikProps) => (
        <form
          onSubmit={formikProps.handleSubmit}
          onReset={formikProps.handleReset}
        >
          <input
            name="firstName"
            value={formikProps.values.firstName}
            onChange={formikProps.handleChange}
            type="text"
            placeholder="name"
            autoFocus
          />
          {formikProps.errors.firstName && (
            <div>{formikProps.errors.firstName}</div>
          )}
          <button type="submit">Save</button>
          <button type="reset" disabled={!formikProps.dirty}>
            Cansel
          </button>
        </form>
      )}
    </Formik>
  );
}

export default UserInfoForm;
