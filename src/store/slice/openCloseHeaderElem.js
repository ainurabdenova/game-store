import { createSlice } from '@reduxjs/toolkit'



const openClose = createSlice({
    name: "openClose",
    initialState: {
        hamburgerMenu: false,
        searchInput: false,
    },
    reducers: {
        setHamburgerMenu(state) {
            state.hamburgerMenu = !state.hamburgerMenu
        },
        setHamburgerMenuClose(state) {
            state.hamburgerMenu = false
        },
        setSearchInput(state) {
            state.searchInput = !state.searchInput
        },
        setSearchInputClose(state) {
            state.searchInput = false
        }
    }
});

export const { setHamburgerMenu, setHamburgerMenuClose, setSearchInput, setSearchInputClose } = openClose.actions

export default openClose.reducer