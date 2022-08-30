import React from "react";
import {useSelector} from 'react-redux';
import PostList from "../postList/PostList";
import { useNavigate } from "react-router-dom";
import "./style.css";

function List(){
    const postList = useSelector((state) =>state.enters);
    const navigate = useNavigate();
    // let [posts, setPosts] = useState([]);
    // console.log(postList);

    return(
        <>
        <div className='list'>
        <h2>게시글</h2>
        <button className='tomain-but' onClick={() => {navigate('/')}}>메인으로</button>
        <button className='towrite-but' onClick={() => {navigate('/enter')}}>글작성</button>
        <div className='listbox'>
            {postList.map(post => 
                <PostList post = {post} key={post.id}/>)}
        </div>
        </div>
        </>
    )
}


export default List;