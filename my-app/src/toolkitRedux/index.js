import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
    night: toolkitReducer
})

export const store = configureStore({
    reducer: rootReducer,

})