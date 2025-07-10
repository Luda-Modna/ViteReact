import React from 'react';
import classNames from 'classnames';
import styles from './SingUpForm.module.css';

const SingUpFormItem = ({
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
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onPasswordConfirmationChange,
  onSubmit,
  onAgreementChange,
  onTogglePassword,
}) => {
  const nameClassName = classNames(styles.input, {
    [styles.inputValid]: isNameValid,
    [styles.inputInvalid]: !isNameValid,
  });

  const emailClassName = classNames(styles.input, {
    [styles.inputValid]: isEmailValid,
    [styles.inputInvalid]: !isEmailValid,
  });

  const passwordClassName = classNames(styles.input, {
    [styles.inputValid]: isPasswordValid,
    [styles.inputInvalid]: !isPasswordValid,
  });

  const passwordConfirmationClassName = classNames(styles.input, {
    [styles.inputValid]: isPasswordConfirmedValid,
    [styles.inputInvalid]: !isPasswordConfirmedValid,
  });

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formHeader}>Sign Up Form</h1>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <label>
          <span>Name:</span>
          <div>
            <input
              className={nameClassName}
              type='text'
              name='name'
              value={name}
              onChange={onNameChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          <span className={styles.inputName}>Email: </span>
          <div className='inputStyles'>
            <input
              className={emailClassName}
              name='email'
              type='email'
              placeholder='your@email.com'
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          <span className={styles.inputName}>Password: </span>
          <div className='inputStyles'>
            <input
              className={passwordClassName}
              name='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onPasswordChange}
            />{' '}
            <button
              type='button'
              className={styles.togglePasswordBtn}
              onClick={onTogglePassword}
            >
              {showPassword ? 'Hide password' : 'Show password'}
            </button>
          </div>
        </label>
        <label>
          <span>Password Confirmation: </span>
          <div className='inputStyles'>
            <input
              className={passwordConfirmationClassName}
              type='password'
              name='passwordConfirmation'
              value={passwordConfirmation}
              onChange={onPasswordConfirmationChange}
            />
          </div>
        </label>
        <label>
          <span>I agree to the terms and conditions</span>
          <input
            type='checkbox'
            checked={isAgreed}
            onChange={onAgreementChange}
          />
        </label>
        <button className={styles.signUpButton} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SingUpFormItem;
