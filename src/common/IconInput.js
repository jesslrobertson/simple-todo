import React from "react";
import { ReactComponent as User } from "../icons/user.svg";
import { ReactComponent as Lock } from "../icons/lock.svg";
import { ReactComponent as Search } from "../icons/search.svg";

export default function IconInput(props) {
  const { value, name, onChange, placeholder, type } = props;

  const passwordInput = (
    <input
      className="icon--input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      minLength={4}
      maxLength={16}
    />
  );

  const standardInput = (
    <input
      className="icon--input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  return (
    <div className={`input--box ${type}`}>
      {name === "email" && <User />}
      {name === "password" && <Lock />}
      {name === "search" && <Search />}
      {name === "password" ? passwordInput : standardInput}
    </div>
  );
}
