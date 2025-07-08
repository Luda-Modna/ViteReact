import React from "react";
import { NavLink } from "react-router";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { LOGIN_VALIDATION_SCHEMA } from "./../../../utils/validate/valsdationSchemas";
import Input from "./../Input";
import styles from "./AuthenticationForm.module.sass";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    formControl: styles.formControl,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <>
      <div className={styles.positionLoginLink}>
        <NavLink className={styles.loginLink} to="/">
          SingUp
        </NavLink>
      </div>
      <article className={styles.signUpContainer}>
        <h2 className={styles.title}>Login to your account</h2>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={LOGIN_VALIDATION_SCHEMA}
        >
          <Form className={styles.form}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              classes={classes}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              classes={classes}
            />
            <button type="submit" className={styles.button}>
              Login
            </button>
          </Form>
        </Formik>
      </article>
    </>
  );
}

export default LoginForm;
