import { createSlice } from "@reduxjs/toolkit";

interface Popup {
    statusPopup: boolean
}

const initialState: Popup = {
    statusPopup: false
}

const popupReducer = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setStatusPopup(state, action) {
            state.statusPopup = action.payload
        }
    }
})

export default popupReducer.reducer
export const { setStatusPopup } = popupReducer.actions