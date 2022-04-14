import { createSlice } from "@reduxjs/toolkit"

interface Input {
    value: string
}

const initialState: Input = {
    value:  ''
}

export const inputReducer = createSlice({
    name: 'input',
    initialState,
    reducers: {
        inputChange(state, action) {
            state.value = action.payload
        }
    }
})

export default inputReducer.reducer
export const { inputChange } = inputReducer.actions