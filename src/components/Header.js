import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import Button from "../common/Button";

export default function Header() {
  const { logout } = useContext(UserContext);
  return (
    <div className="header">
      <Button
        buttonText={"Logout"}
        color={"green"}
        onClick={logout}
        type="header"
        aria-label='logout'
      />
    </div>
  );
}
