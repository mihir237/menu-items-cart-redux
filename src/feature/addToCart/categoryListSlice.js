import { createSlice } from '@reduxjs/toolkit'

export const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState: {
        category: [],
    },
    reducers: {
        addToCategory: (state, action) => {
            state.category = [...action.payload]
        }
    }
})

export const { addToCategory } = categoryListSlice.actions

export const selectCategory = (state) => state.categoryList.category

export default categoryListSlice.reducer
