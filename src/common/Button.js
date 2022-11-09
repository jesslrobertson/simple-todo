import React from 'react'

export default function Button(props){
  const {type, text, color } = props

  return (
    <button className={`button ${type} ${color}`}>
      {text}
    </button>
  )

}