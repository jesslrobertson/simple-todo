import React, { useState, useContext, useEffect } from "react";
import Button from "../common/Button";
import { UserContext } from "../UserProvider";

export default function TodoItemForm(props) {
  const { toggleNewTodo, todo, editingItem, setEditingItem, index } = props;
  const [input, setInput] = useState("");
  const { editTodo, addTodo } = useContext(UserContext);

  //handle edit state
  useEffect(() => {
    editingItem === true && setInput(todo);
  }, [editingItem, todo]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingItem === true) {
      editTodo(index, input);
      setEditingItem(false);
    } else {
      addTodo(input);
      setInput("");
      toggleNewTodo((prev) => !prev);
    }
  }

  return (
    <form className="todo--form--container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo--input"
        name="todo"
        value={input}
        onChange={handleChange}
        placeholder="Todo"
      />
      <Button
        type={"save"}
        color="blue"
        buttonText="save"
        onClick={handleSubmit}
        aria-label="save"
      />
    </form>
  );
}
