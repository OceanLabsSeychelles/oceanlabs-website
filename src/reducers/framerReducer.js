import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    initial: {
        scale: 1.8,
        rotate: 10,
        borderRadius: "10%"
    },
    final: {
        scaleX: 1.8,
        scaleY: 0.8,
        translateY: "20vh",
        rotate: 120,
        borderRadius: "50%"
    },
    background: "pink",
}

const framerSlice = createSlice({
    name: "framer",
    initialState,
    reducers: {
        setInitial: (state, action) => {
            state.initial = action.payload;
        },
        setFinal: (state, action) => {
            state.final = action.payload;
        },
        setBackground: (state, action) => {
            state.background = action.payload;
        },
    }
});

export const framerSelectors = (state) => state.framer;
export const framerActions = framerSlice.actions;
export default framerSlice.reducer;