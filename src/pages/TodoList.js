import React, { useState, useContext} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import TodoItem from '../components/TodoItem'
import { UserContext } from '../UserProvider'


export default function TodoList(){
  const { userState, setUserState } = useContext(UserContext)

  console.log(userState)

  //TODO: write function to get items from local storage

  return (
    <div className='home--page'>
      <Header />
      <div className='todo--list'>
      <h3>My Todo List</h3>
      <Search />
        <TodoItem />
      </div>
    </div>
  )
}