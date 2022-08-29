import React from 'react'
import {useNavigate} from "react-router-dom"
import styled from 'styled-components';

const Main = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Button onClick={()=> navigate('/enter')} >글 작성</Button>
            <Button onClick={()=> navigate('/detail')} >게시글 조회</Button>
        </div>
    );
}

const Button = styled.button` 
    border: 1px solid green;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`

export default Main;