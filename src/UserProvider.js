import React, { useState } from "react";
import axios from "axios";
var qs = require("qs");

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const initState = {
    username: JSON.parse(localStorage.getItem("username")) || "",
    userImage: localStorage.getItem("userImage") || "",
    token: localStorage.getItem("token") || "",
    todos: localStorage.getItem("todos") || "",
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  console.log("userState");
  console.log(userState);

  function login(credentials) {
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(credentials),
      url: "https://cors-anywhere.herokuapp.com/http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
    };
    console.log("login called");
    console.log(credentials);
    axios(options).then((res) => {
      console.log(res);
      const { user_username, user_token, user_profile_image } = res.data;
      console.log(user_profile_image);
      localStorage.setItem("token", user_token);
      localStorage.setItem("username", JSON.stringify(user_username));
      localStorage.setItem("userImage", user_profile_image);
      setUserState((prevUserState) =>
        ({
          ...prevUserState,
          user_username,
          user_profile_image,
          user_token,
        }))
    })
    .catch((err) => handleAuthError(err.res.data))
  }

  function logout() {
    console.log("logout called");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUserState({
      username: "",
      userImage: "",
      token: "",
      todos: [],
    });
  }

  function handleAuthError(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function resetAuthError() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        login,
        logout,
        resetAuthError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
