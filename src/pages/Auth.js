import React, { useState, useContext } from 'react'
import { UserContext } from '../UserProvider'
import AuthForm from '../components/AuthForm'

export default function Auth(){
  const { login, errMsg, resetAuthError, loading } = useContext(UserContext)
  const initInputs = { email: "", password: "", emailMsg:"", passwordMsg:""}
  const [inputs, setInputs] = useState(initInputs)
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)

  function validateEmail() {
    //using validation string from http://emailregex.com
    const validRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      if (inputs.email.match(validRegex)) {
      setEmailIsValid(true)
      setInputs(prevInputs => ({
        ...prevInputs,
        emailMsg: ""
      }))
    } else {
      setEmailIsValid(false)
      setInputs(prevInputs => ({
        ...prevInputs,
        emailMsg: "Enter a valid email address"
      }))
    }
  }

  function handleChange(e){
    const {name, value} = e.target
    if (errMsg){
      resetAuthError()
    }
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function validatePassword(){
    if (inputs.password.length < 4 ){
      setPasswordIsValid(false)
      setInputs(prevInputs => ({
        ...prevInputs,
        passwordMsg: "Password must be at least 4 characters"
      }))
    } else {
      setPasswordIsValid(true)
      setInputs(prevInputs => ({
        ...prevInputs,
        passwordMsg: ""
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
        loading={loading}
        emailIsValid={emailIsValid}
        passwordIsValid={passwordIsValid}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
      />
      {errMsg && <p className='error'>{errMsg}</p>}
    </div>
  )
}