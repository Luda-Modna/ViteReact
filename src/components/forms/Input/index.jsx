import classNames from "classnames";
import { Field } from "formik";
import React from "react";

function Input({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <div className={classes.formControl}>
            <label>
              <input className={inputClassNames} {...restProps} {...field} />
              {meta.error && meta.touched && (
                <div className={classes.error}>{meta.error}</div>
              )}
            </label>
          </div>
        );
      }}
    </Field>
  );
}

export default Input;
