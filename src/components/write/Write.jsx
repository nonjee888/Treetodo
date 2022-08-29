import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/";
import styled from "styled-components";
import nextId from "react-id-generator";
import { createEnter } from "../../redux/modules/enters"


const Write = () => {
    let id = nextId();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const initialState = {
        id:0,
        writer: "",
        title:"",
        body: "",
        password:"",
        count: 0
    }
    const [enter, setEnter] = useState(initialState)

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setEnter({...enter, [name]: value});
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(enter.writer.trim() === "" || enter.title.trim() === "" || enter.body.trim() === "") return alert('내용을 입력하세요!');
        dispatch(createEnter({ ...enter, id: id }));
        setEnter(initialState);
        navigate("/")
    };

    return (
        <StPostingBox onSubmit={onSubmitHandler}>
            <StInputGroup>
                <StWriter>
                <label>이름 :</label>
                    <StInput type="text" name="writer" value={enter.writer} onChange={onChangeHandler}/>
                </StWriter>
                <StTitle>
                <label>제목 :</label>
                    <StInput type="text" name="title" value={enter.title} onChange={onChangeHandler} minLength="3"/>
                </StTitle>
                <StBody>
                <label>내용 :</label>
                    <StBodyInput type="textarea" name="body" value={enter.body} onChange={onChangeHandler} minLength="10"/>
                </StBody>
                <StPassWord>
                <label>비밀번호 :</label>
                    <StPassInput type="password" name="password" value={enter.password} onChange={onChangeHandler} minLength="4"/>
                </StPassWord>
            </StInputGroup>
            <StSubmit>
                <StButton>등록하기</StButton>
            </StSubmit>
        </StPostingBox>
    )

}

export default Write;

const StPostingBox = styled.form`
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 500px;
    height: 450px;
    margin: 100px auto;
`
const StWriter = styled.div`
    padding: 10px 0 0 90px;
    align-items: center;
    display: flex;
    gap: 20px;
    height: 10%;
    width: 100%;
    margin: auto;
`
const StTitle = styled.div`
    padding: 0 0 0 90px;
    align-items: center;
    display: flex;
    gap: 20px;
    height: 10%;
    width: 100%;
    margin: 20px 0 0 0;
`
const StBody = styled.div`
    padding: 0 0 0 90px;
    align-items: center;
    display: flex;
    gap: 20px;
    height: 10%;
    width: 100%;
    margin: 50px 0 0 0;
`
const StInput = styled.input`
    height: 20px;
    width: 250px;
    
`
const StBodyInput = styled.textarea`
    height: 80px;
    width: 250px;
`

const StPassWord = styled.div`
    padding: 0 0 0 90px;
    align-items: center;
    display: flex;
    gap: 20px;
    height: 10%;
    width: 100%;
    margin: 50px 0 0 0;
`

const StSubmit = styled.div`
    padding: 10px 0 0 180px;
    height: 30%;
    width: 100%;
`
const StButton = styled.button`
    height: 35px;
    width: 150px;
    border: #f1f1f1 2px solid;
    border-radius: 10px;
`
const StInputGroup = styled.div`
    padding: 30px 0 0 0;
    height: 70%;
    width: 100%;
`
const StPassInput = styled.input`
    height: 20px;
    width: 200px;
`