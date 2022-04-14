import { createSlice } from "@reduxjs/toolkit";

interface Reg {
    loading: boolean;
    answer: string;
    statusReg: boolean
    error: boolean
}

const initialState: Reg = {
    loading: false,
    answer: '',
    statusReg: false,
    error: false
}

const registraitonReducer = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registrationFetch(state) {
            state.loading = true
        },
        registrationSuccess(state, action) {
            state.answer = action.payload;
            state.statusReg = true;
            state.loading = true
        },
        registrationError(state) {
            state.error = false
        }
    }
})

export default registraitonReducer.reducer
export const { registrationError, registrationFetch, registrationSuccess } = registraitonReducer.actions