import { createSlice } from "@reduxjs/toolkit";

let enters = createSlice({
  name:"enters",
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
      createEnter(state, action){
          state.push(action.payload)
      },
      removeEnter(state, action){
<<<<<<<< HEAD:src/redux/modules/posts.js
         let index = state.findIndex(enter => enter.id === action.payload)
         state.splice(index, 1 );
      },
      updateEnter(state, action){
          let index = state.findIndex(enter => enter.id === action.payload.id)
========
         let index = state.findIndex(post => post.id === action.payload)
         state.splice(index, 1 );
      },
      updateEnter(state, action){
          let index = state.findIndex(post => post.id === action.payload.id)
>>>>>>>> master:src/redux/modules/enters.js
          state.splice(index, 1, action.payload );
       }
  }
})

export let {createEnter, removeEnter, updateEnter} = enters.actions;

export default enters;