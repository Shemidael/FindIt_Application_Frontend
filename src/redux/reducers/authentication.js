import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
    
    name: 'authentication',

    initialState: {

        user: {}
    },

    reducers: {

        authenticate: (state, action) => {

            return action.payload;
        }
    }
});

export const { authenticate } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;