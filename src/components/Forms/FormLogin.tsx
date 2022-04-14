import { Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUserLogin } from '../../models/IUserLogin';
import { login } from '../../services/LoginService';
import { inputChange } from '../../store/reducers/inputReducer';
import { setLoginData } from '../../store/reducers/loginReducer';
import Form from '../UI/Forms/Form';

const FormsLogin: FC = () => {
    const {user} = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()

    const loginData: IUserLogin = {
        nameUser: '',
        password: ''
    }

    const postData = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setLoginData(loginData))
        dispatch(login(loginData))
    }
    
    return (
        <div>
            <Form method='POST' onSubmit={(e) => postData(e)}>
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
            </Form>
        </div>
    )
}

export default FormsLogin