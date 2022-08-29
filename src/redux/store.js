import { configureStore } from "@reduxjs/toolkit";
import enters from "./modules/enters"
import reviews from './modules/reviews'

export default configureStore({
    reducer: {
        enters: enters.reducer,
        reviews: reviews.reducer,

    }
})



