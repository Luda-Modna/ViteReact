import React from "react";
import { NavLink } from "react-router";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { SIGN_UP_VALIDATION_SCHEMA } from "./../../../utils/validate/valsdationSchemas";
import styles from "./AuthenticationForm.module.sass";
import Input from "./../Input";

function SignUpForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    isAgree: false,
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
        <NavLink to="/login" className={styles.loginLink}>
          Login
        </NavLink>
      </div>

      <article className={styles.signUpContainer}>
        <h2 className={styles.title}>Create an account</h2>
        <p className={styles.subtitle}>
          We always keep your name and email address private
        </p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={SIGN_UP_VALIDATION_SCHEMA}
        >
          <Form className={styles.form}>
            <div className={styles.inputRow}>
              <Input
                type="text"
                name="firstName"
                placeholder="Yourname"
                autoFocus
                classes={classes}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Your lastName"
                classes={classes}
              />
            </div>
            <div className={styles.inputRow}>
              <Input
                type="text"
                name="nickName"
                placeholder="nickName"
                classes={classes}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                classes={classes}
              />
            </div>
            <div className={styles.inputRow}>
              <Input
                type="password"
                name="password"
                placeholder="password"
                classes={classes}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                classes={classes}
              />
            </div>

            <div role="group" className={styles.roleGroup}>
              <label>
                <div className={styles.roleItem}>
                  <Field type="radio" name="role" value="buyer" />
                  <div>
                    <h3>Join As a Buyer</h3>
                    <p className={styles.detalsRoleItem}>
                      I am looking for Name, Logo or Tagline for my business,
                      brand or product
                    </p>
                  </div>
                </div>
              </label>
              <label>
                <div className={styles.roleItem}>
                  <Field type="radio" name="role" value="creative" />
                  <div>
                    <h3>Join As a Creative</h3>
                    <p className={styles.detalsRoleItem}>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace
                    </p>
                  </div>
                </div>
              </label>
              <ErrorMessage
                name="role"
                component="div"
                className={styles.error}
              />
            </div>

            <label className={styles.checkboxContainer}>
              <Field type="checkbox" name="isAgree" />
              <p className={styles.checkboxItem}>
                {" "}
                By clicking this checkbox, you agree to our
              </p>
              <a className={styles.linkTermOfServise} href="#">
                Terms of Service
              </a>
            </label>
            <ErrorMessage
              name="isAgree"
              component="div"
              className={styles.error}
            />

            <button type="submit" className={styles.button}>
              Create Account
            </button>
          </Form>
        </Formik>
      </article>
    </>
  );
}

export default SignUpForm;
