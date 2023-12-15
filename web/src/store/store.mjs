import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./slices/alertSlice.mjs";

const store = configureStore({
    reducer: {
        alerts: alertSlice
    }
})

export default store