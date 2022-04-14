import { createSlice } from "@reduxjs/toolkit";
import { IContacts } from "../../models/IContact";

interface ContactsState {
    contacts: IContacts[];
    search: string;
    isLoading: boolean;
    error: boolean;
    errorAnswer: string;
}

const initialState:ContactsState = {
    contacts: [],
    search: '',
    isLoading: false,
    error: false,
    errorAnswer: ''
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        contactsFetching(state) {
            state.isLoading = true;
        },
        contactsFetchingSucces(state, action) {
            state.isLoading = false;
            state.error = false;
            state.contacts  = action.payload;
        },
        contactsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.error = true;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
        contactError(state, action) {
            state.errorAnswer = action.payload
        }
    }
})

export default contactSlice.reducer
export const {contactsFetching, contactsFetchingSucces, contactsFetchingError, setSearch, contactError} = contactSlice.actions

