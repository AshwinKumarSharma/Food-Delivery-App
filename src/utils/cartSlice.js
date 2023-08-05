import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;