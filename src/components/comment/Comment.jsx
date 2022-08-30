import React from 'react';
import {useState} from 'react';
import Contents from '../contents/Contents'
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from "react-router-dom"
import { createReview } from '../../redux/modules/reviews';
import nextId from 'react-id-generator';
import "./style.css";



function Comment(){
    
    const navigate = useNavigate();
    const comId = nextId();
    const initialState = {
        id: 0,
        post:0,
        writer:"",
        desc:""

    }
    const [comment,setComment] = useState(initialState);
    const review = useSelector((state) => state.reviews);
    const {id} = useParams();
    let dispatch = useDispatch();
    // console.log(review)

    const reviewList = review.filter((desc) => {
        return String(desc.post) === id;
    })  
    
    const submitContent = (e) => {
        e.preventDefault();
        dispatch(createReview({ ...comment, id: comId, post:id}));
        setComment(initialState);
    }
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setComment({...comment, [name]:value});
      };
 
    // console.log(comment);
    return (
        <>
        <form onSubmit={submitContent}>
        <div>댓글페이지
            <button className='tolist-but' onClick={() => {navigate('/post')}}>이전으로</button>
        </div>
        <div>
            <label> 닉네임</label>
            <input className="input" type="text" name="writer" onChange={onChangeHandler} value={comment.writer}/>
            <label>내용</label>
            <input className="input" type="text" name="desc" onChange={onChangeHandler} value={comment.desc}/>
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
