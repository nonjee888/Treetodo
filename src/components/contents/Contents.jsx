import React from "react";
import { useState } from "react";
import Reviser from "../reviser/Reviser";
import {removeReview, updateReview} from '../../redux/modules/reviews'
import {useDispatch} from 'react-redux'
import "./style.css";

function Contents({desc}){
    const dispatch = useDispatch();
    const [reviser,setReviser] = useState(false);
    const close=()=>{
        setReviser(false);    
    }



    return(
        <>
        {reviser === true
        ?<Reviser desc={desc} close={close}/>
        :null}
        <div className="comment" key={desc.id}>
            <div>닉네임 : {desc.writer}</div>
            <div>코멘트 : {desc.desc}</div>
            <button onClick={() => {setReviser(true)}}>수정하기</button>
            <button onClick={() => dispatch(removeReview(desc.id))}>삭제하기</button>
        </div>
        </>
    );
}

export default Contents;