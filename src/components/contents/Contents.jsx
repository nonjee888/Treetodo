import React from "react";
import { useState } from "react";
import './App.css';

function Contents(){
    const [reviser,setReviser] = useState(false);


    return(
        <>
        <div className="comment">
            <div>닉네임</div>
            <div>내용</div>
            <button>수정하기</button>
            <button>삭제하기</button>
        </div>
        <div className="comment">
            <div>닉네임</div>
            <div>내용</div>
            <button>수정하기</button>
            <button>삭제하기</button>
        </div>
        </>
    );
}

export default Contents;