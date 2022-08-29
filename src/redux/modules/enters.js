import { createSlice } from "@reduxjs/toolkit";

let enters = createSlice({
  name:"enters",
  initialState:[
    {
      id:0,
      writer: "",
      title:"",
      body: "",
      password:"",
      count: 0
    },
    {
      id:1,
      writer: "",
      title:"",
      body: "",
      password:"",
      count: 0
    },
  ],
  reducers: {
		createEnter(state, action){
			state.push(action.payload);
		},
		updateEnter(state, action){
			let index = state.findIndex(todo => todo.id === action.payload);
			state.splice(index,1, action.payload);
<<<<<<< HEAD
=======

>>>>>>> 0789b4126400ef2b88329d686b0f27d9d4378fae
		},
		removeEnter(state, action){
			let  index = state.findIndex(todo=>  todo.id === action.payload);
			state.splice(index,1);
		}
  }
})

export let {createEnter, removeEnter, updateEnter} = enters.actions;

export default enters;