import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useDispatch } from "react-redux/";
import {updateReview} from '../../redux/modules/reviews'
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Reviser({desc, close}){
    
    const dispatch=useDispatch();
    let navigate = useNavigate();
    const initialState = {
        id: desc.id,
        post: desc.post,
        writer: desc.writer,
        desc: desc.desc
    };
    const [reviser,setReviser]=useState(initialState.desc);

    const onChangeHandler = (event) => {
        setReviser(event.target.value);

      };

    
    return(
        <>
        <div>
            <label>내용</label>
            <input type='text' name='desc' value={reviser} onChange={onChangeHandler}></input>
        </div>
        <button onClick={() => {dispatch(updateReview({...desc, desc:reviser}));
                                close();}}>수정하기</button>
        <button onClick={()=>{close()}}>취소</button>
        </>
    )
}

export default Reviser;