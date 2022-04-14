import { createSlice } from "@reduxjs/toolkit";

interface ModalWindow {
    editWindowStatus: boolean;
    createWindowStatus: boolean;
    deleteWindowStatus: boolean;
}

const initialState: ModalWindow = {
    createWindowStatus: false,
    deleteWindowStatus: false,
    editWindowStatus: false
}

const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        closeWindow(state) {
            state.editWindowStatus = false
            state.deleteWindowStatus = false
            state.createWindowStatus = false
        },
        openEditWindow(state) {
            state.editWindowStatus = true
        },
        openDeleteModal(state) {
            state.deleteWindowStatus = true
        },
        openCreateModal(state) {
            state.createWindowStatus = true
        }
    }
})

export default modalWindowSlice.reducer
export const { closeWindow, openCreateModal, openDeleteModal, openEditWindow } = modalWindowSlice.actions