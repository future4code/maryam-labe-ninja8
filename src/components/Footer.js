import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    margin-top: 10px;
    display: flex;
	align-items: center;
	width: 100%;
	height: 50px;
	justify-content: center;
    img{
        width: 40px;
        padding-left: 10px;
        padding-right: 10px;
        :hover{
            opacity: 0.5;
            cursor: pointer;
        }
    }
`

export default class Footer extends React.Component{
    render(){
        return <HeaderContainer>
            <a href='https://www.instagram.com/' target='_Blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' alt='Icone Instagram'/>
            </a>
            <a href='https://www.facebook.com/' target='_Blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174848.png' alt='Icone Facebook'/>
            </a>
            <a href='https://www.twitter.com/' target='_Blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/1409/1409937.png' alt='Icone Twitter'/>
            </a>
        </HeaderContainer>
    }
}