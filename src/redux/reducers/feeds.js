import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const FeedsSlice = createSlice({
    
    name: 'feeds',

    initialState: [],

    reducers: {

        getFeeds: (state, action) => {

            return action.payload;
        },

        triggerGetFeeds: async (state) => {

            await axios.get('http://localhost:5000/api/feed')
      
            .then((response) => {
        
                return response.data.feeds;
            });
        }
    }
});

export const { getFeeds, triggerGetFeeds } = FeedsSlice.actions;

export default FeedsSlice.reducer;