import { configureStore} from "@reduxjs/toolkit";
import posts from "./modules/posts"





export default configureStore({
    reducer: {
        posts: posts.reducer,
    }
  });