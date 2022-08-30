import {useNavigate} from "react-router-dom"
import styled from "styled-components";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Hbox>
            <Htitle onClick={()=> navigate('/')} >메인</Htitle>
        </Hbox>
    )
}

const Htitle = styled.h3`
cursor: pointer;
padding: 5px;
padding-left: 20px;
`

const Hbox = styled.div`
background-color: green;
border: 1px;
padding: 5px;
margin-bottom: 10px;
`

export default Header;