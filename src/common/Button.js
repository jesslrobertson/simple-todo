import React from "react";

export default function Button(props) {
  const { type, buttonText, color, onClick, disabled } = props;

  return (
    <button
      className={`button ${type} ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}
