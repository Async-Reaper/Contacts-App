import { IUserLogin } from '../models/IUserLogin';
import { AppDispatch } from '../store/store';
import { urlDomain } from '../constants/urlDomain';
import { registrationError, registrationFetch, registrationSuccess } from '../store/reducers/registrationReducer';
import { setStatusPopup } from '../store/reducers/popunReducer';
import axios from 'axios';

export const signup = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(registrationFetch())
            const response = await axios.post(urlDomain + 'users', data);
            dispatch(registrationSuccess('Registration success'))
            dispatch(setStatusPopup(true))
        } catch (error) {
            dispatch(registrationError())
        }
    }
}