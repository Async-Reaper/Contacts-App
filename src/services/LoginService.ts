import axios from 'axios';
import { IUserLogin } from '../models/IUserLogin';
import { loginFetch, loginFetchingError, loginFetchingSuccess } from '../store/reducers/loginReducer';
import { AppDispatch } from '../store/store';
import { urlDomain } from '../constants/urlDomain';
import { contactError } from '../store/reducers/contactsReducer';
import { inputChange } from '../store/reducers/inputReducer';

export const login = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loginFetch())
            const response = await axios.get<IUserLogin[]>(urlDomain + 'users');
            
            response.data.map(user => {
                if (user.nameUser === data.nameUser && user.password === data.password) {
                    localStorage.setItem('userId', JSON.stringify(user.id))
                    dispatch(loginFetchingSuccess(user))
                } else {
                    dispatch(loginFetchingError('User or password incorrect.'))
                    dispatch(contactError('Username or password incorected.'))
                }
            })
        } catch (error) {
            console.log(error)
            dispatch(loginFetchingError('Error request'))
        } finally {
            dispatch(inputChange(''))
        }
    }
}