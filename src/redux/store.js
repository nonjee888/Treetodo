import { configureStore } from "@reduxjs/toolkit";
import enters from "./modules/enters"


export default configureStore({
    reducer: {
        enters: enters.reducer,
    }
  });