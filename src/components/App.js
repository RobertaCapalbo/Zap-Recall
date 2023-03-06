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
        { question: "Qual era o animago de Lupin?", answer: "Pegadinha! Lupin não era um animago, mas um lobisomem"},
        { question: "Quando é o aniversário de Harry Potter?", answer: "31 de julho"},
        { question: "Qual era a posição de James Potter no quadribol?", answer: "Ele era artilheiro! Já seu filho, Harry Potter, apanhador"},
        { question: "Qual é o sabor de geleia favorito de Dumbledore?", answer: "Específica, né? Framboesa! 10 pontos para Grifinória"},
        { question: "Qual é o código para a entrada de visitantes no Ministério da Magia?", answer: "62442. Busque estes números em um teclado telefônico e você verá a palavra 'MAGIC'"},
        { question: "O que está escrito no espelho de Ojesed de trás para frente?", answer: "I show not your face but your heart's desire"},
        { question: "Quantas escadas há em Hogwarts?", answer: "142!"},
        { question: "Qual o nome completo de Dumbledore?", answer: "Alvo Brian Percival Wulfrico Dumbledore"},
        { question: "Em que ano Harry Potter nasceu?", answer: "1980"},
        { question: "Fred Weasley perdeu qual orelha?", answer: "Pegadinha! Foi Jorge quem perdeu uma orelha."},
        { question: "Qual o nome da pessoa que Ron se transforma para entrar no Ministério?", answer: "Reginald Cottermule"},
        { question: "Quanto vale, em sicles, um galeão?", answer: "23 sicles"}
    ]


   return(
<div ClassName="tela">
    <Container>
        <Logo/>
    <div className='perguntas'>
    {cards.map((card, index) => (
  <Flashcard
     key={index}
     index={index}
     cardData={card}
     number={number}
     setNumber={setNumber}
  />
))}
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