import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import TodoItem from "../components/TodoItem";
import Button from "../common/Button";
import TodoItemForm from "../components/TodoItemForm";
import { UserContext } from "../UserProvider";

export default function TodoList() {
  const { storedTodos, setUserState } = useContext(UserContext);
  const [newTodo, setNewTodo] = useState(false);
  const [search, setSearch] = useState("");
  const [displayedTodos, setDisplayedTodos] = useState(storedTodos);

  //handle filtering of list through search bar
  useEffect(() => {
    if (!search) {
      setDisplayedTodos(storedTodos);
    } else {
      setDisplayedTodos(
        storedTodos.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, storedTodos]);

  useEffect(() => {
    setUserState((prevState) => ({
      ...prevState,
      storedTodos: JSON.parse(localStorage.getItem("todos")),
    }));
  }, [setUserState]);

  function toggleNewTodo() {
    setNewTodo((prev) => !prev);
  }

  return (
    <div className="home--page">
      <Header />
        <h3 className="title">My To-do List</h3>
      <div className="todo--list--box">
        <div className="todo--nav">
          <Search search={search} setSearch={setSearch} />
          <Button buttonText="New" color="blue" onClick={toggleNewTodo} />
        </div>
        <div className="todo--list">
        {newTodo && (
          <TodoItemForm
            toggleNewTodo={toggleNewTodo}
            storedTodos={storedTodos}
            setDisplayedTodos={setDisplayedTodos}
          />
        )}
        {displayedTodos?.map((todo, index) => (
          <TodoItem newTodo={newTodo} todo={todo} index={index} key={index} />
        ))}
        </div>
      </div>
    </div>
  );
}
