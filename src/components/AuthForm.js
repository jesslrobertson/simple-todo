import React, { useState } from "react";
import IconInput from "../common/IconInput";
import Button from "../common/Button";

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    errMsg,
    buttonText,
    inputs: { email, password },
  } = props;

  return (
    <form className="auth--form" onSubmit={handleSubmit}>
      <label className="auth--input">
        Email
        <IconInput
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="user@rapptrlabs.com"
          type="login"
        />
      </label>
      <label className="auth--input">
        Password
        <IconInput
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Must be at least 4 characters"
          type="login"
        />
      </label>
      <Button buttonText={buttonText} color="light-green" type="login" />
    </form>
  );
}
