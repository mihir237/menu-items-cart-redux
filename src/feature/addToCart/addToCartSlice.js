import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        cart: {},
    },
    reducers: {
        addToCartItem: (state) => {

            state.cart += 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCartItem } = counterSlice.actions

export default counterSlice.reducer