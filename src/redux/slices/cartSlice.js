import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (status, action) => {
            status.items.push(action.payload)

        },
        removeItem: (status, action) => {
            console.log("Remove item function called")
        }
    }
});

export const {addItem,  removeItem} = cartSlice.actions;
export default cartSlice.reducer;