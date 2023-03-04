import styled from "styled-components";
import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Rodape(){
    return(
    <Topo>
        <Logo src={logo} alt='logo'/>
        <Nome>ZapRecall</Nome>
    </Topo>
    )
}

const Topo = styled.div`
display:flex;
align-items: center;
gap:20px;
margin-top:48px;
margin-bottom:59px;
`;

const Nome = styled.div`
width: 203.17px;
height: 44px;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;
color: #FFFFFF;
`;

const Logo = styled.img`
width: 52px;
height: 60px;
`;