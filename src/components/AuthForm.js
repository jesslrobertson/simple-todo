import React from "react";
import IconInput from "../common/IconInput";
import Button from "../common/Button";

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    buttonText,
    loading,
    emailIsValid,
    passwordIsValid,
    validatePassword,
    validateEmail,
    inputs: { email, password, emailMsg, passwordMsg },
  } = props;

  return (
    <form className="auth--form" onSubmit={handleSubmit}>
      <div className="auth--input--box">
        <label className="auth--input">
          Email
          <IconInput
            onInput={validateEmail}
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="user@rapptrlabs.com"
            type="email"
            valid={emailIsValid}
            emailMsg={emailMsg}
          />
          {!emailIsValid && <p className="auth error">{emailMsg}</p>}
        </label>
      </div>
      <div className="auth--input--box">
        <label className="auth--input">
          Password
          <IconInput
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Must be at least 4 characters"
            type="password"
            valid={passwordIsValid}
            passwordMsg={passwordMsg}
            onInput={validatePassword}
          />
          {!passwordIsValid && <p className="auth error">{passwordMsg}</p>}
        </label>
      </div>
      <Button
        buttonText={buttonText}
        color="light-green"
        type="login"
        disabled={loading || !emailIsValid || !passwordIsValid}
      />
    </form>
  );
}
