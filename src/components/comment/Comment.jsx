import React from 'react';
import {useState} from 'react';
import Contents from '../contents/Contents'
import {useSelector} from 'react-redux'
import {useParams} from "react-router-dom"
// import {useDispatch} from 'react-redux'
import './App.css';


function Comment(){
    
    
    const initialState = {
        id: 0,
        post:0,
        name:"",
        desc:""

    }
    const [comment,setComment] = useState(initialState);
    const review = useSelector((state) => state.reviews);
    const {id} = useParams();
    // const [desc, setDesc] = useState([]);
    console.log(review)

    const submitContent = (e) => {
        e.preventDefault();

    }
    const onChangeHandler = (event) => {
        const inputValue = event.target.value;
        setComment({...comment});
      };

    const reviewList = review.filter((review) => {
        return String(review.post) === id;
    })  
    
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
            {reviewList.map((desc) => {
                return(
                    <Contents desc={desc} key={desc.id}/>
                )
            })}
            
        </div>
        </>
        
    )
    
}   

export default Comment;