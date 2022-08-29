import React from 'react';
import {useNavigate} from "react-router-dom"
import './App.css';

function Post({post}){
    let navigate = useNavigate();

    return(
        <>
        <div>
        <div className="postlist">
            <p onClick={() => navigate('/detail/'+ post.id)}>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.count}</p>
            <p>{post.password}</p>
            <p>{post.name}</p>
        </div>
        </div>
        </>
    )
}

export default Post;