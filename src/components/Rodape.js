import styled from "styled-components";
import React, { useState } from 'react';

export default function Rodape({number}){

    return(
    <Footer>
        <Concluidos>{number}/4 CONCLUÍDOS</Concluidos>
    </Footer>
    )
}

const Footer = styled.div`
width: 100%;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
bottom:0;
left:0;
position:absolute;
text-align:center;
display:flex;
align-items: center;
justify-content: center;
position:fixed;
`;

const Concluidos = styled.p`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
`;