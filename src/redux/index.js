import { configureStore } from "@reduxjs/toolkit";

import FeedsReducer from "./reducers/feeds.js";

import AlertReducer from "./reducers/alert.js";

import AuthenticationReducer from "./reducers/authentication.js";

const Store = configureStore({

    reducer: {

        feeds: FeedsReducer,
        alert: AlertReducer,
        authentication: AuthenticationReducer
    }
});

export default Store;