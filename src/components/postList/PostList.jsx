import React from 'react';
import {useNavigate} from "react-router-dom"
import "./style.css";

function Post({post}){
    let navigate = useNavigate();

    return(
        <>
        <div>
        <div className="postlist">
            <p className='todetail' onClick={() => navigate('/detail/'+ post.id)}>제목 : {post.title}</p>
            <p className='desc'>내용 : {post.body}</p>
            <p>카운트 : {post.count}</p>
            <p>작성자 : {post.writer}</p>
           
        </div>
        </div>
        </>
    )
}

export default Post;