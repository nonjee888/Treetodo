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
        if (comment.writer.trim() === "" || comment.desc.trim() === "") {
            return alert("모든 항목을 입력해주세요.")};
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
        <div className='comment'>
            <form onSubmit={submitContent}>
            <div>댓글페이지
                <button className='tolist-but' onClick={() => {navigate('/post')}}>이전으로</button>
            </div>
            <div className='layout'>
                <div className='name'>
                    <label className='label'> 네임</label>
                    <input className="inputName" type="text" name="writer" onChange={onChangeHandler} placeholder="닉네임을 추가하세요" value={comment.writer} maxLength={5}/>
                </div>
                <div className='coment'>
                    <label className='label'>댓글</label>
                    <input className="inputComment" type="text" name="desc" onChange={onChangeHandler } placeholder="댓글을 추가하세요" value={comment.desc} maxLength={100}/>
                </div>
                <button className='write-but'>댓글 작성</button>
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
        </div>
        </>
        
    )
    
}   

export default Comment;
