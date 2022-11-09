import React, {useState} from React
import IconButton from "../common/IconButton"
import Button from '../common/Button'
import TodoItemForm from "./TodoItemForm"

export default function TodoItem(props){
  const [edit, setEdit] = useState(false)

  const displayItem = (
    <div className='todo' edit={edit}>
      <h6 className='todo--title'>Finish TodoItem Component</h6>
      <IconButton type={edit} />
      <IconButton type={remove} />
    </div>
  )

  const editItem = (
    <>
      <TodoItemForm title={title} edit={edit} />
    </>
  )

  return (
    <div className='todo--box'>
      <h6>A todo will live here</h6>
{/* conditionally render either item or form depending on state */}
    </div>
  )
}