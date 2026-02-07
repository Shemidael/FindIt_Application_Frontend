import { createSlice } from "@reduxjs/toolkit";

const AlertSlice = createSlice({
    
    name: 'alert',

    initialState: {

        props: {
            show: false
        }
    },

    reducers: {

        alert: (state, action) => {

            return action.payload;
        }
    }
});

export const { alert } = AlertSlice.actions;

export default AlertSlice.reducer;