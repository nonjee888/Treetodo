
import { configureStore} from "@reduxjs/toolkit";
import posts from "./modules/posts"
import reviews from '../redux/modules/reviews'





export default configureStore({
    reducer: {
        posts: posts.reducer,
        reviews: reviews.reducer,
    }
  });
