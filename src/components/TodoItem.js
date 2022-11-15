import React, { useState, useContext } from "react";
import { UserContext } from "../UserProvider";
import IconButton from "../common/IconButton";
import TodoItemForm from "./TodoItemForm";

export default function TodoItem(props) {
  const { removeTodo, editTodo } = useContext(UserContext);
  const [editingItem, setEditingItem] = useState(false);
  const { todo, index } = props;

  const displayItem = (
    <>
      <p className="todo--title">{todo}</p>
      <div className="todo--button--box">
        <IconButton
          type="edit"
          className="svg--button"
          setEditingItem={setEditingItem}
        />
        <IconButton
          type="remove"
          className="svg--button"
          index={index}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );

  const formItem = (
    <>
      <TodoItemForm
        todo={todo}
        editTodo={editTodo}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
        index={index}
      />
    </>
  );

  return <div className="todo">{editingItem ? formItem : displayItem}</div>;
}
