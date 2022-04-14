import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUserLogin } from '../../models/IUserLogin'
import { signup } from '../../services/SignupService'
import { inputChange } from '../../store/reducers/inputReducer'
import Form from '../UI/Forms/Form'

const FormSignup = () => {
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  
  const newUser: IUserLogin = {
    nameUser: '',
    password: ''
  }


  const handleReg = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signup(newUser))
    navigate('/login')
  }

  return (
    <Form method='POST' onSubmit={e => handleReg(e)}>
      <TextField 
          id="standard-basic-login" 
          label="Username" 
          variant="standard" 
          margin="normal" 
          onChange={ (e) => {
                  dispatch(inputChange(e.target.value))
                  newUser.nameUser = e.target.value
              }
          }
      />
      <TextField 
          id="standard-basic-password" 
          label="Password" 
          variant="standard" 
          margin="normal"
          onChange={ (e) => {
                  dispatch(inputChange(e.target.value))
                  newUser.password = e.target.value
              }
          }
          type='password'
      />
      <Button type='submit' variant="contained">Signup</Button>
    </Form>
  )
}

export default FormSignup