import {  combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { requests } from '../services/PostService';
import contactsReducer from './reducers/contactsReducer';
import inputReducer from './reducers/inputReducer';
import loginReducer from './reducers/loginReducer';
import modalReducer from './reducers/modalReducer';
import registrationReducer from './reducers/registrationReducer';
import popupReducer from './reducers/popunReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    login: loginReducer,
    input: inputReducer,
    modal: modalReducer,
    registration: registrationReducer,
    popup: popupReducer,
    [requests.reducerPath]: requests.reducer
})

export const setupStore = () => {
    return configureStore(
        {
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(requests.middleware)
        }
    )
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']