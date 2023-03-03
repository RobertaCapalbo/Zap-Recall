import logo from '../assets/logo.png';
import seta_play from '../assets/seta_play.png';
import icone_erro from '../assets/icone_erro.png';
import icone_quase from '../assets/icone_quase.png';
import icone_certo from '../assets/icone_certo.png';
import seta_virar from '../assets/seta_virar.png';
import styled from "styled-components";
import React, { useState } from 'react';


export default function Flashcard({cards}) {

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

    return(
<div ClassName="tela">
<Container>

        <Topo>
            <Logo src={logo} alt='logo'/>
            <Nome>ZapRecall</Nome>
        </Topo>

<div className='perguntas'>

     <div className="pergunta-um">
        <PerguntaUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <FrontfaceUm questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
                <QuestionOne questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>Pergunta 1</QuestionOne>
                <SetaPlayOne questionOne={questionOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={firstQuestionShow} src={seta_play} alt='seta-play'/>
                <YesIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_certo} alt='icone_certo'/>
                <AlmostIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_quase} alt='icone_quase'/>
                <WrongIcon noOne={noOne} almostOne={almostOne} yesOne={yesOne} src={icone_erro} alt='icone_erro'/>
            </FrontfaceUm>
        </PerguntaUm>
        <BackfaceUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <ZapQuestionUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>Quando é o aniversário de Harry Potter?</ZapQuestionUm>
            <SetaVirarUm questionOne={questionOne} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={firstAnswerShow} src={seta_virar} alt='seta-virar'/>
        </BackfaceUm>
        <AnswersOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <ZapAnswerOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>31 de julho</ZapAnswerOne>
            <ButtonsOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
            <NoOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={didNotKnow}>
                Não lembrei
            </NoOne>
            <AlmostOne onClick={almostKnew} answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne}>
                Quase não lembrei
            </AlmostOne>
            <YesOne answerOne={answerOne} noOne={noOne} almostOne={almostOne} yesOne={yesOne} onClick={IKnow}>
                Zap!
            </YesOne>
          </ButtonsOne>
        </AnswersOne>
    </div>
    </div>
</Container>

    <Footer>
        <Concluidos>{number}/4 CONCLUÍDOS</Concluidos>
    </Footer>
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

const PerguntaUm = styled.div`
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
align-items: center;
justify-content: center;
gap:163px;
margin-bottom:25px;
display: ${(props) => (props.questionOne ? 'none' : props.answerOne ? 'none' : '')}
`;

const FrontfaceUm = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:163px;
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const QuestionOne = styled.p`
width: 87px;
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