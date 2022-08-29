import React from 'react';
import {useState} from 'react';
import Contents from '../contents/Contents'
// import {useDispatch} from 'react-redux'
import './App.css';

let number = 1;
function Comment(){
    
    
    const initialState = {
        id: 0,
        post:0,
        name:"",
        desc:""

    }
    const [comment,setComment] = useState(initialState);
    // const [review, setReview] = useState("");

    const submitContent = (e) => {
        e.preventDefault();

    }
    const onChangeHandler = (event) => {
        const inputValue = event.target.value;
        setComment({...comment});
      };
    
    console.log(comment);
    return (
        <>
        <form onSubmit={submitContent}>
        <div>댓글페이지</div>
        <div>
            <label> 닉네임</label>
            <input className="input" type="text" onChange={onChangeHandler} value={comment.name}/>
            <label>내용</label>
            <input className="input" type="text" onChange={onChangeHandler} value={comment.desc}/>
            <button>댓글 작성</button>
        </div>
        </form> 
        <div className="commentlist">
            댓글 리스트
            <Contents/>
        </div>
        </>
        
    )
    
}   

export default Comment;