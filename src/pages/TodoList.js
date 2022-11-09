import React, {useState} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import TodoItem from '../components/TodoItem'


export default function TodoList(){
  const [todos, setTodos] = useState()

  //TODO: write function to get items from local storage

  return (
    <div className='home--page'>
      <h3>This is the home page</h3>
      <Search />
      <div className='todo--list'>
        {/*TODO- map over todos, rendering a TodoItem for each.  */}
      </div>
    </div>
  )
}