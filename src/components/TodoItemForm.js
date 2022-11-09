import React from 'react'
import Button from '../common/Button'

export default function TodoItemForm(props){

  return (
    <div className='form--container'>
      {/* write todo from here */}
      <Button type={save} text={save} />
    </div>
  )
}