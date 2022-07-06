import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import openCloseReducer from "./slice/openCloseHeaderElem"
import gamesReducer from "./slice/catalogPageState"
import gamePageReducer from './slice/games';
import userReducer from "./slice/userSlice"
import basketReducer from "./slice/basket"
import searchReducer from "./slice/searchFilter"
import PriceSliderReducer from "./slice/PaginationSlider"

const rootReducer = combineReducers({
    openClose: openCloseReducer,
    games: gamesReducer,
    basket: basketReducer,
    gamePage: gamePageReducer,
    user: userReducer,
    search: searchReducer,
    PriceSlider: PriceSliderReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export { store } 