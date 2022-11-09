import React from "react";
import { user, lock } from '../icons'

export default function IconInput(props){
  const { type, placeholder, name } = props

  return (
    <div className='input--box'>
      {/* img tag with type prop for svg */}
      <input name={name} placeholder={placeholder} />
    </div>
  )
}