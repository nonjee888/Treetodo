import { createSlice } from "@reduxjs/toolkit";

let posts = createSlice({
  name:"posts",
  initialState:[
      {
        id: 0,
        name : "아무나",
        password : "qqqq",
        title : "나는 제목",
        body : "나는 내용",
      },
      {
          id: 1,
          name : "테스트",
          password : "qqqq",
          title : "확인",
          body : "중입니다.",
      },
  ],
  reducer:{
      createPost(state, action){
          state.push(action.payload)
      },
      removePost(state, action){
         let index = state.findIndex(post => post.id === action.payload)
         state.splice(index, 1 );
      },
      updatePost(state, action){
          let index = state.findIndex(post => post.id === action.payload.id)
          state.splice(index, 1, action.payload );
       }
  }
})

export let {createPost, removePost, updatePost} = posts.actions;

export default posts;