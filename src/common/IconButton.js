import React from "react";
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Trash } from "../icons/trash.svg";

export default function IconButton(props) {
  const { type, className, index, removeTodo, setEditingItem } = props;

  return (
    <div className="icon--button">
      {type === "edit" ? (
        <Edit className={className} aria-label={type} onClick={() => setEditingItem(true)} />
      ) : (
        <Trash className={className} aria-label={type} onClick={() => removeTodo(index)} />
      )}
    </div>
  );
}
