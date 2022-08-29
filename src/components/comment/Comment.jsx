import React from 'react';
import {useState} from 'react';
import Contents from '../contents/Contents'
// import {useDispatch} from 'react-redux'
import './App.css';

let number = 1;
function Comment(){
    
    
    const initialState = {

    }
    const [comment,setComment] = useState(initialState);
    

    return (
        <>
        <div>댓글페이지</div>
        <div>
            <label>
                닉네임
                <input type="text"/>
            </label>
          
            <label>내용</label>
            <input type='text'/>
            <button>댓글 작성</button>
          
        </div>
        <div className="commentlist">
            댓글 리스트
            <Contents/>
        </div>
        </>
    )
    
}

export default Comment;