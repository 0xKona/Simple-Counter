import { createSlice } from "@reduxjs/toolkit";

const modalOpenSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false
    },
    reducers: {
        openModal: state => {
            state.value = true
        },
        closeModal: state => {
            state.value = false
        }
    }
});

export default modalOpenSlice.reducer;
export const { openModal, closeModal } = modalOpenSlice.actions;