
import seta_play from '../assets/seta_play.png';
import icone_erro from '../assets/icone_erro.png';
import icone_quase from '../assets/icone_quase.png';
import icone_certo from '../assets/icone_certo.png';
import seta_virar from '../assets/seta_virar.png';
import styled from "styled-components";
import React, { useState } from 'react';


export default function Flashcard({index, cardData, number, setNumber}) {

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

    return(
<div className="pergunta-um" data-test="flashcard">
        <PerguntaUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <FrontfaceUm questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
                <QuestionOne data-test="flashcard-text" questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>Pergunta {index + 1}</QuestionOne>
                <SetaPlayOne questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} data-test="play-btn" onClick={firstQuestionShow} src={seta_play} alt='seta-play'/>
                <YesIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_certo} data-test="zap-icon" alt='icone_certo'/>
                <AlmostIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_quase} data-test="partial-icon" alt='icone_quase'/>
                <WrongIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_erro} data-test="no-icon" alt='icone_erro'/>
            </FrontfaceUm>
        </PerguntaUm>
        <BackfaceUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <ZapQuestionUm data-test="flashcard-text" questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>{cardData.question}</ZapQuestionUm>
            <SetaVirarUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={firstAnswerShow} data-test="turn-btn" src={seta_virar} alt='seta-virar'/>
        </BackfaceUm>
        <AnswersOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <ZapAnswerOne data-test="flashcard-text" answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>{cardData.answer}</ZapAnswerOne>
            <ButtonsOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <NoOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} data-test="no-btn" onClick={didNotKnow}>
                N??o lembrei
            </NoOne>
            <AlmostOne onClick={almostKnew} data-test="partial-btn" answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
                Quase n??o lembrei
            </AlmostOne>
            <YesOne answerOne={answerOne}  data-test="zap-btn" noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={IKnow}>
                Zap!
            </YesOne>
          </ButtonsOne>
        </AnswersOne>
    </div>
 )
 }

const PerguntaUm = styled.div`
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
align-items: center;
justify-content: center;
margin-bottom:25px;
display: ${(props) => (props.questionOne ? 'none' : props.answerOne ? 'none' : '')}
`;

const FrontfaceUm = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:148px;
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const QuestionOne = styled.p`
width: 100px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${(props) => (props.noOne ? '#FF3030' : props.almostOne ? '#FF922E' : props.yesOne ? '#2FBE34' : '#333333')};
text-decoration: ${(props) => (props.noOne || props.yesOne || props.almostOne ? 'line-through' : 'none')};
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const SetaPlayOne = styled.img`
width: 20px;
height: 23px;
display: ${(props) => (props.questionOne || props.yesOne || props.noOne || props.almostOne ? 'none' : '')}
`;

const BackfaceUm = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display: ${(props) => (props.questionOne ? '' : props.answerOne ? 'none' : 'none')}
`;

const AnswersOne = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
display: ${(props) => (props.answerOne ? '' : 'none')}
`;

const SetaVirarUm = styled.img`
position:absolute;
bottom:10px;
left:255px;
width: 30px;
height: 20px;
display: ${(props) => (props.questionOne ? '' : props.answerOne ? 'none' : 'none')}
`;

const ZapQuestionUm = styled.p`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
padding-left:15px;
padding-top:18px;
box-sizing:border-box;
color: #333333;
display: ${(props) => (props.questionOne ? '' : props.answerOne ? 'none' : 'none')}
`;

const ZapAnswerOne = styled.p`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
padding-left:15px;
padding-top:18px;
box-sizing:border-box;
color: #333333;
display:${(props) => (props.answerOne ? '' : 'none')}
`;

const ButtonsOne = styled.div`
display:flex;
gap:8px;
margin-top:-72px;
margin-left:15px;
background: #FFFFD5;
border:none;
display:${(props) => (props.answerOne ? '' : 'none')}
`;

const NoOne = styled.button`
width: 85.17px;
height: 37.17px;
background: #FF3030;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
border:none;
display:${(props) => (props.answerOne ? '' : 'none')}
`;

const AlmostOne = styled.button`
width: 85.17px;
height: 37.17px;
background: #FF922E;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
border:none;
display:${(props) => (props.answerOne ? '' : 'none')}
`;

const YesOne = styled.button`
width: 85.17px;
height: 37.17px;
background: #2FBE34;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
color: #FFFFFF;
border:none;
display:${(props) => (props.answerOne ? '' : 'none')}
`;

const WrongIcon = styled.img`
bottom:10px;
left:255px;
width: 23px;
height: 23px;
display:${(props) => (props.noOne ? '' : 'none')}
`;

const AlmostIcon = styled.img`
bottom:10px;
left:255px;
width: 23px;
height: 23px;
display:${(props) => (props.almostOne ? '' : 'none')}
`;


const YesIcon = styled.img`
bottom:10px;
left:255px;
width: 23px;
height: 23px;
display:${(props) => (props.yesOne ? '' : 'none')}
`;