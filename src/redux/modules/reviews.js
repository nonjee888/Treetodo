import { createSlice } from "@reduxjs/toolkit";

let reviews = createSlice({
name: "reviews",    
initialState:[
    {
        id:0,
        post:0,
        writer: "아가",
        desc: "걸음마중"
    },
    {
        id:1,
        post:0,
        writer: "나는",
        desc: "배가안고프다"
    },
    {
        id:2,
        post:0,
        writer: "아하하",
        desc: "후하하"
    }],

    reducers:{
        createReview(state, action){
            state.push(action.payload);
        },
        removeReview(state, action){
            let index = state.findIndex(review => review.id === action.payload);
                        state.splice(index,1);

        },
        updateReview(state, action){
            let index = state.findIndex(enter => enter.id === action.payload.id);
                        state.splice(index, 1, action.payload);
        }

    }
})

export let { createReview, removeReview, updateReview } = reviews.actions;
export default reviews;