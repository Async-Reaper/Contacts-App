import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserLogin } from "../../models/IUserLogin";

interface LoginSlice {
    user: IUserLogin | null;
    loginStatus: boolean;
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState : LoginSlice = {
    user: null,
    loginStatus: false,
    loading: false,
    error: false,
    answer: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginStatus(state, action) {
            state.loginStatus = action.payload
        },
        setLoginData(state, action: PayloadAction<IUserLogin>){
            state.user = action.payload
        },
        loginFetch(state) {
            state.loading = true
        },
        loginFetchingSuccess(state, action: PayloadAction<IUserLogin>) {
            state.loading = false;
            state.error = false;
            state.user = action.payload
        },
        loginFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = true;
            state.answer = action.payload
        },
        logoutFetch(state) {
            state.loading = true;
        },
        logoutSuccess(state) {
            localStorage.removeItem('userId');
            localStorage.removeItem('contactId');
            state.user = null;
            state.loading = false;
            state.error = false
        }
    }
})

export default loginSlice.reducer 
export const {setLoginData, loginFetch, loginFetchingSuccess, loginFetchingError, setLoginStatus, logoutFetch, logoutSuccess} = loginSlice.actions