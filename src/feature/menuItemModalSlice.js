import { createSlice } from '@reduxjs/toolkit'

export const menuItemModalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalVisibility: false,
        itemId: null,
    },
    reducers: {
        setModalState: (state, action) => {
            const { modalVisibility, itemId } = action.payload;
            console.log(modalVisibility, itemId)
            state.modalVisibility = modalVisibility;
            state.itemId = itemId;
        }
    }
})

export const { setModalState } = menuItemModalSlice.actions

export const selectModalVisibility = (state) => state.modal?.modalVisibility
export const selectItemId = (state) => state.modal?.itemId

export default menuItemModalSlice.reducer
