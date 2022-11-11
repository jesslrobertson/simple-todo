import React, { useState, useContext } from 'react'
import { UserContext } from '../UserProvider'
import AuthForm from '../components/AuthForm'
import IconInput from '../common/IconInput'
import Button from '../common/Button'


export default function Auth(){
  const { login, errMsg, resetAuthError } = useContext(UserContext)
  const initInputs = { email: "", password: "", validation: ""}
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    console.log(inputs)
    if (inputs.password.length < 4 && inputs.password.length > 1){
      setInputs(prevInputs => ({
        ...prevInputs,
        validation: "Password must be at least 4 characters"
      }))
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    login(inputs)
  }

  return (
    <div className='auth--page page'>
      <h3 className='title'>Rapptr Labs</h3>
      <AuthForm 
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errMsg={errMsg}
        buttonText="Login"
      />
    </div>
  )
}