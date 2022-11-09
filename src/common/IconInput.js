import React from "react";
import { ReactComponent as user } from '../icons/user.svg'
import { ReactComponent as lock } from '../icons/lock.svg'
import { ReactComponent as search } from '../icons/search.svg'

export default function IconInput(props){
  const { type, placeholder, name } = props

  return (
    <div className='input--box'>
      {/* img tag with type prop for svg */}
      <input name={name} placeholder={placeholder} />
    </div>
  )
}