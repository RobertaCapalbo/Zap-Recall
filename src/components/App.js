import React, { useState } from 'react';
import Flashcard from './Flashcard';
import Logo from './Logo';
import Rodape from './Rodape';
import styled from "styled-components";

export default function App() {

    const [number, setNumber] = useState(0)
    const [questionOne, setQuestionOne] = useState(false);
    const [answerOne, setAnswerOne] = useState(false);
    const [noOne, setnoOne] = useState(false);
    const [almostOne, setAlmostOne] = useState(false);
    const [yesOne, setYesOne] = useState(false);

    function firstQuestionShow(){
        setQuestionOne(true)
    }

    function firstAnswerShow(){
        setQuestionOne(false)
        setAnswerOne(true)
    }

    function didNotKnow(){
        setnoOne(true)
        setAnswerOne(false)
        setNumber(number + 1)
    }

    function almostKnew(){
        setAlmostOne(true)
        setAnswerOne(false)
        setNumber(number + 1)
    }

    function IKnow(){
        setYesOne(true)
        setAnswerOne(false)
        setNumber(number + 1)
    }

    const cards = [
        { question: "Qual era o animago de Lupin?", answer: "Pegadinha! Lupin não era um animago, mas um lobisomem" }
    ]

   return(
<div ClassName="tela">
    <Container>
        <Logo/>
    <div className='perguntas'>
        <Flashcard cards={cards} questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} firstQuestionShow={firstQuestionShow} firstAnswerShow={firstAnswerShow} didNotKnow={didNotKnow} almostKnew={almostKnew} IKnow={IKnow}/>
    </div>
    </Container>
        <Rodape number={number}/>
 </div>
   )
}

const Container = styled.div`
width:100vw;
height:682px;
background-color:#FB6B6B;
display:flex;
flex-direction: column;
align-items: center;
position:relative;
overflow-y: scroll;
&&::-webkit-scrollbar{
    display:none;
}
`;