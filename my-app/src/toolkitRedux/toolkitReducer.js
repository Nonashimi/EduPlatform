import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = {
    isNight: false,
};

export const clickSun = createAction("CLICK_SUN");
export const clickMoon = createAction("CLICK_MOON");
export const clickSwitch = createAction("CLICK_SWITCH");

export default createReducer(defaultState, (builder) => {
    builder
        .addCase(clickSun, (state) => {
            state.isNight = false;
        })
        .addCase(clickMoon, (state) => {
            state.isNight = true;
        })
        .addCase(clickSwitch, (state) => {
            state.isNight = !state.isNight;
        });
});
