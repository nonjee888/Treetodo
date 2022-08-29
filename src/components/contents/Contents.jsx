import React from "react";
import { useState } from "react";
import './App.css';
import Reviser from "../reviser/Reviser";

function Contents({desc}){
    const [reviser,setReviser] = useState(false);
    const close=()=>{
        setReviser(false);    
    }
    


    return(
        <>
        {reviser === false?<Reviser/>:null}
        <div className="comment" key={desc.id}>
            <div>{desc.writer}</div>
            <div>{desc.desc}</div>
            <button>수정하기</button>
            <button>삭제하기</button>
        </div>
        <div className="comment">
            <div>{desc.writer}</div>
            <div>{desc.desc}</div>
            <button>수정하기</button>
            <button>삭제하기</button>
        </div>
        </>
    );
}

export default Contents;