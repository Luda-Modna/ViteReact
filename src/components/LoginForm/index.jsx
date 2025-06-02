import React, { Component } from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";

const INITIAL_VALUES = { email: "", password: "" };

const LOGIN_FORM_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
    };
  }

  handleSubmit = (e) => {
    e.praventDefault();
    this.setState(INITIAL_VALUES);
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REG_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REG_EXP.password.test(value),
    });
  };

  render() {
    const { email, password, isEmailValid , isPasswordValid} = this.state;

    // const emailClassName = `${styles.input} ${
    //   isEmailValid ? styles.inputValid : styles.inputInvalid
    // }`;

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Email: </span>
            <input
              className={emailClassName}
              name="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password: </span>
            <input
              className={passwordClassName}
              name="password"
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
