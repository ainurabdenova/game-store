import { createSlice } from '@reduxjs/toolkit'
import { GAMES } from "../../constants/main-data"




const searchFilter = createSlice({
    name: "search",
    initialState: {
        filterDataSearch: [],
        textEntered: ""
    },
    reducers: {
        setInputText: (state, action) => {
            state.textEntered = action.payload
        },
        setFilterDataSearch: (state, action) => {
            state.filterDataSearch = GAMES.filter((value) => {
                return value.title.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        setFilterDataDelete: (state) => {
            state.filterDataSearch = []
        },
        setInputTextDelete: (state) => {
            state.textEntered = ""
        }
    }
});

export const { setInputText, setFilterDataSearch, setFilterDataDelete, setInputTextDelete } = searchFilter.actions

export default searchFilter.reducer