import { createSlice } from '@reduxjs/toolkit'
import { GAMES } from "../../constants/main-data"



const catalogPageState = createSlice({
    name: "catalogPage",
    initialState: {
        games: GAMES,
        paginationPage: [],
        paginationNum: 0,

    },
    reducers: {
        setGames(state) {
            state.games = GAMES
            state.paginationNum = 0;

            state.paginationPage = state.games.slice(0, 6)
        },
        setRatingGames(state) {

            state.games = state.games.sort(
                function (a, b) {
                    return b.rating - a.rating
                }
            )
            state.paginationNum = 0;

            state.paginationPage = state.games.slice(0, 6)

        },
        setPriceGames(state, action) {
            state.paginationNum = 0;

            state.games = GAMES.filter(item => {
                if (item.price >= action.payload[0] && item.price <= action.payload[1]) {
                    return true
                }
            })
            state.paginationPage = state.games.slice(0, 6)
        },

        setPaginationPageNotes(state, action) {
            state.paginationPage = action.payload
        },
        setPaginationNum(state, action) {
            state.paginationNum = action.payload
        }

    }
});

export const {
    setGames,
    setRatingGames,
    setPaginationPageNotes,
    setPaginationNum,
    setPriceGames,
} = catalogPageState.actions

export default catalogPageState.reducer