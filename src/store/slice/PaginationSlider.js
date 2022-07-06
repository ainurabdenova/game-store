import { createSlice } from '@reduxjs/toolkit'



const PaginationSlider = createSlice({
    name: "paginationSlice",
    initialState: {
        paginationSlider: [5000, 45000],

    },
    reducers: {
        setPriceSlider(state, action) {
            // state.paginationSlider[0] = action.payload[0]
            // state.paginationSlider[1] = action.payload[1]
            state.paginationSlider = action.payload

        },
    }
});

export const { setPriceSlider } = PaginationSlider.actions

export default PaginationSlider.reducer