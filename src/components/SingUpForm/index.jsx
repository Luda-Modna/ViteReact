import React, { Component } from "react";
import SingUpFormItem from "./SingUpFormItem.jsx";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const SINGUP_FORM_REG_EXP = {
  name: /^[A-Za-zА-Яа-я'\s-]{2,30}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

export default class SingUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_VALUES,
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPasswordConfirmedValid: false,
      isPasswordConfirmed: false,
      isAgreed: false,
      showPassword: false,
    };
  }

  handleSubmit = (e) => {
    e.praventDefault();
    this.setState(INITIAL_VALUES);
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value,
      isNameValid: SINGUP_FORM_REG_EXP.name.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: SINGUP_FORM_REG_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: SINGUP_FORM_REG_EXP.password.test(value),
    });
  };

  handlePassswordConfirmationChange = ({ target: { value } }) => {
    const { password } = this.state;

    this.setState({
      passwordConfirmation: value,
      isPasswordConfirmedValid:
        value === password && SINGUP_FORM_REG_EXP.password.test(value),
    });
  };

  handleAgreementChange = ({ target: { checked } }) => {
    this.setState({ isAgreed: checked });
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      isNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfirmedValid,
      isAgreed,
      showPassword,
    } = this.state;

    const {
      handleSubmit,
      handleNameChange,
      handleEmailChange,
      handlePasswordChange,
      handlePassswordConfirmationChange,
      handleAgreementChange,
      toggleShowPassword,
    } = this;

    return (
      <SingUpFormItem
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        isNameValid={isNameValid}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        isPasswordConfirmedValid={isPasswordConfirmedValid}
        isAgreed={isAgreed}
        showPassword={showPassword}
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onPasswordConfirmationChange={handlePassswordConfirmationChange}
        onAgreementChange={handleAgreementChange}
        onTogglePassword={toggleShowPassword}
      />
    );
  }
}
