import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log("state.items:", state.items);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find((i) => i.id === itemId);
            if (existingItem) {
                state.totalItems -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((i) => i.id !== itemId);
            }
        },
        clearCart: (state) => {
            state.items = [];
           
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;