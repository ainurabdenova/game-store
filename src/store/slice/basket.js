import { createSlice } from '@reduxjs/toolkit'



const basketSlice = createSlice({
    name: "basket",
    initialState: {
        itemsInBasket: [],
    },
    reducers: {
        setItemInBasket: (state, action) => {
            state.itemsInBasket.push(action.payload)
        },
        deleteItemFromBasket: (state, action) => {
            state.itemsInBasket = state.itemsInBasket.filter(game => game.id !== action.payload)
        },
        deleteAllItem: (state) => {
            state.itemsInBasket = []
        }
    }
});

export const { setItemInBasket, deleteItemFromBasket, deleteAllItem } = basketSlice.actions

export default basketSlice.reducer