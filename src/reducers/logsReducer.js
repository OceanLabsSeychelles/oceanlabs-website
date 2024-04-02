import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    index:0,
}

const logsSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        setIndex: (state, action) => {
            state.index = action.payload;
        }
    }
});

export const logActions = logsSlice.actions;
export const logSelectors = (state) => state.logs;
export default logsSlice.reducer;
