import React from "react";

export default function Button(props) {
  const { type, buttonText, color, onClick } = props;

  return <button className={`button ${type} ${color}`} onClick={onClick}>{buttonText}</button>;
}
