import React from "react";
import {useSelector} from 'react-redux';
import PostList from "../postList/PostList";

function List(){
    const postList = useSelector((state) =>state.enters);

    // let [posts, setPosts] = useState([]);
    // console.log(postList);

    return(
        <>
        <h2>게시글</h2>
        {postList.map(post => 
            <PostList post = {post} key={post.id}/>)}
        </>
    )
}


export default List;