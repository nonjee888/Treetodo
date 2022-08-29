import { configureStore } from '@reduxjs/toolkit'

import reviews from '../redux/modules/reviews'
// import notes from './modules/notes'

export default configureStore({
    reducer: { 
      reviews: reviews.reducer,
    //   notes : notes.reducer
    }
})