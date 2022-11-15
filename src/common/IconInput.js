import React from "react";
import { ReactComponent as User } from "../icons/user.svg";
import { ReactComponent as Lock } from "../icons/lock.svg";
import { ReactComponent as Search } from "../icons/search.svg";

export default function IconInput(props) {
  const { value, name, onChange, placeholder, type, valid, onInput } = props;

  return (
    <div>
      <div className={`input--border ${type} ${valid}`}>
        {name === "email" && <User />}
        {name === "password" && <Lock />}
        {name === "search" && <Search />}
        <input
          className={`icon--input`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onInput={onInput}
          minLength={type === "password" ? 4 : undefined}
          maxLength={
            type === "password" ? 16 : type === "email" ? 50 : undefined
          }
        />
      </div>
    </div>
  );
}
