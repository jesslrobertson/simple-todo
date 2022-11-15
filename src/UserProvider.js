import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
var qs = require("qs");

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const navigate = useNavigate();
  const initState = {
    username: JSON.parse(localStorage.getItem("username")) || "",
    userImage: localStorage.getItem("userImage") || "",
    token: localStorage.getItem("token") || "",
    storedTodos: JSON.parse(localStorage.getItem("todos")) || [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const todos = [];
  if (userState.storedTodos?.length < 1) {
    todos.push("Click 'New' to write a new item!");
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  //using a proxy server to get around the CORS error, enable access with one click at https://cors-anywhere.herokuapp.com/corsdemo
  function login(credentials) {
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(credentials),
      url: "https://cors-anywhere.herokuapp.com/http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
    };
    console.log("login called");
    console.log(credentials);
    setLoading(true);
    axios(options)
      .then((res) => {
        console.log(res);
        const { user_username, user_token, user_profile_image } = res.data;
        console.log(user_profile_image);
        localStorage.setItem("token", user_token);
        localStorage.setItem("username", JSON.stringify(user_username));
        localStorage.setItem("userImage", user_profile_image);
        setUserState((prevUserState) => ({
          ...prevUserState,
          username: user_username,
          userImage: user_profile_image,
          token: user_token,
        }));
        navigate("/todolist");
      })
      .catch((err) => handleAuthError(err.response.status))
      .finally(() => setLoading(false));
  }

  function addTodo(newTodo) {
    const updatedList = [...userState.storedTodos, newTodo];
    localStorage.setItem("todos", JSON.stringify(updatedList));
    setUserState((prevUserState) => ({
      ...prevUserState,
      storedTodos: JSON.parse(localStorage.getItem("todos")),
    }));
  }

  function editTodo(editingIndex, updatedTodo) {
    const currentList = [...userState.storedTodos];
    currentList[editingIndex] = updatedTodo;
    localStorage.setItem("todos", JSON.stringify(currentList));
    setUserState((prevUserState) => ({
      ...prevUserState,
      storedTodos: JSON.parse(localStorage.getItem("todos")),
    }));
  }

  function removeTodo(indexToRemove) {
    const currentList = [...userState.storedTodos];
    const updatedList = currentList.filter(
      (item, index) => item[index] !== item[indexToRemove]
    );
    localStorage.setItem("todos", JSON.stringify(updatedList));
    setUserState((prevUserState) => ({
      ...prevUserState,
      storedTodos: JSON.parse(localStorage.getItem("todos")),
    }));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUserState({
      username: "",
      userImage: "",
      token: "",
    });
  }

  function handleAuthError(errCode) {
    console.log(errCode);
    let authErrMsg =
      errCode === 401
        ? "Email or password is incorrect"
        : "Something went wrong";
    setUserState((prevState) => ({
      ...prevState,
      errMsg: authErrMsg,
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
        addTodo,
        editTodo,
        removeTodo,
        login,
        logout,
        resetAuthError,
        loading,
        setUserState,
        ...userState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
