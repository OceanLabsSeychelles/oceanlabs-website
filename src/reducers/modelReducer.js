import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    model: null,
    scale: 1,
    isPressed: false,
    mobileFramerHeight:"20vh",
    desktopFramerHeight:"20vh",
    mobileModelHeight:"70vh",
    desktopModelHeight:"60vh",
}

const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setIsPressed: (state, action) => {
            state.isPressed = action.payload;
        },
        setMobileFramerHeight: (state, action) => {
            state.mobileFramerHeight = action.payload;
        },
        setDesktopFramerHeight: (state, action) => {
            state.desktopFramerHeight = action.payload;
        },
        setMobileModelHeight: (state, action) => {
            state.mobileModelHeight = action.payload;
        },
        setDesktopModelHeight: (state, action) => {
            state.desktopModelHeight = action.payload;
        },
        setScale: (state, action) => {
            state.scale = action.payload;
        }

    }
});
export const selectModel = (state) => state.model.model;
export const modelSelectors = (state) => state.model;
export const modelActions = modelSlice.actions;
export const selectIsPressed = (state) => state.model.isPressed;
export const {setModel, setIsPressed} = modelSlice.actions;
export default modelSlice.reducer;