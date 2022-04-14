import { Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { IUserLogin } from '../../models/IUserLogin';
import { login } from '../../services/LoginService';
import { contactError } from '../../store/reducers/contactsReducer';
import { inputChange } from '../../store/reducers/inputReducer';
import { setLoginData } from '../../store/reducers/loginReducer';
import Error from '../UI/ErrorText/Error';
import Form from '../UI/Forms/Form';

const FormsLogin: FC = () => {
    const dispatch = useTypedDispatch()

    const loginData: IUserLogin = {
        nameUser: '',
        password: ''
    }

    const postData = (e: React.MouseEvent<HTMLFormElement>, userData: IUserLogin) => {
        e.preventDefault()
        if (userData.nameUser !== '' && userData.password !== '') {
            dispatch(setLoginData(userData))
            dispatch(login(userData))
        } else {
            dispatch(contactError('Inputs must be filled!'))
            
        }
    }
    
    return (
        <div>
            <Form method='POST' onSubmit={(e) => postData(e, loginData)}>
                <TextField 
                    id="standard-basic-login" 
                    label="Username" 
                    variant="standard" 
                    margin="normal" 
                    onChange={ (e) => {
                            dispatch(inputChange(e.target.value))
                            loginData.nameUser = e.target.value
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
                            loginData.password = e.target.value
                        }
                    }
                    type='password'
                />
                <Button type='submit' variant="contained">Login</Button>
                <Error />
            </Form>
        </div>
    )
}

export default FormsLogin