import logo from '../assets/logo.png';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import styled from "styled-components";
import React, { useState } from 'react';


export default function App() {
    const [number, setNumber] = useState(0)
    const [questionOne, setQuestionOne] = useState(false);
    const [questionTwo, setQuestionTwo] = useState(false);
    const [questionThree, setQuestionThree] = useState(false);
    const [questionFour, setQuestionFour] = useState(false);
    const [answerOne, setAnswerOne] = useState(false);
    const [answerTwo, setAnswerTwo] = useState(false);
    const [answerThree, setAnswerThree] = useState(false);
    const [answerFour, setAnswerFour] = useState(false);

    function firstQuestionShow(){
        setQuestionOne(true)
    }

    function secondQuestionShow(){
        setQuestionTwo(true)
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
        <PerguntaUm questionOne={questionOne}>
            <FrontfaceUm questionOne={questionOne}>
                <QuestionOne questionOne={questionOne}>Pergunta 1</QuestionOne>
                <SetaPlayOne questionOne={questionOne} onClick={firstQuestionShow} src={seta_play} alt='seta-play'/>
            </FrontfaceUm>
        </PerguntaUm>
        <BackfaceUm questionOne={questionOne}>
            <ZapQuestionUm questionOne={questionOne}>Quando é o aniversário de Harry Potter?</ZapQuestionUm>
            <SetaVirarUm questionOne={questionOne} src={seta_virar} alt='seta-virar'/>
        </BackfaceUm>
        <Answers>
            <ZapAnswer>31 de julho</ZapAnswer>
            <Buttons>
            <No>
                Não lembrei
            </No>
            <Almost>
                Quase não lembrei
            </Almost>
            <Yes>
                Zap!
            </Yes>
          </Buttons>
        </Answers>
    </div>


    <div className="pergunta-dois">
        <PerguntaDois questionTwo={questionTwo}>
            <FrontfaceDois questionTwo={questionTwo}>
                <QuestionDois questionTwo={questionTwo}>Pergunta 2</QuestionDois>
                <SetaPlayDois questionTwo={questionTwo} onClick={secondQuestionShow} src={seta_play} alt='seta-play'/>
            </FrontfaceDois>
        </PerguntaDois>
        <BackfaceDois>
            <ZapAnswer>Qual era o animago de Lupin?</ZapAnswer>
            <SetaVirar src={seta_virar} alt='seta-virar'/>
        </BackfaceDois>
        <Answers>
            <ZapQuestion>Pegadinha! Lupin não era um animago, mas um lobisomem</ZapQuestion>
            <Buttons>
            <No>
                Não lembrei
            </No>
            <Almost>
                Quase não lembrei
            </Almost>
            <Yes>
                Zap!
            </Yes>
          </Buttons>
        </Answers>
    </div>

    <div className="pergunta-tres">
        <PerguntaTres>
            <Frontface>
                <Question>Pergunta 3</Question>
                <SetaPlay src={seta_play} alt='seta-play'/>
            </Frontface>  
        </PerguntaTres>
        <BackfaceTres>
            <ZapQuestion>Qual foi a segunda horcrux a ser destruída?</ZapQuestion>
            <SetaVirar src={seta_virar} alt='seta-virar'/>
        </BackfaceTres>
        <Answers>
            <ZapAnswer>O anel</ZapAnswer>
            <Buttons>
            <No>
                Não lembrei
            </No>
            <Almost>
                Quase não lembrei
            </Almost>
            <Yes>
                Zap!
            </Yes>
          </Buttons>
        </Answers>
    </div>


    <div className="pergunta-quatro">
        <PerguntaQuatro>
            <Frontface>
                <Question>Pergunta 4</Question>
                <SetaPlay src={seta_play} alt='seta-play'/>
            </Frontface>  
        </PerguntaQuatro>
        <BackfaceQuatro>
            <ZapQuestion>Qual era a posição de Tiago Potter no time de quadribol da Grifinória?</ZapQuestion>
            <SetaVirar src={seta_virar} alt='seta-virar'/>
        </BackfaceQuatro>
        <Answers>
            <ZapAnswer>Ele era artilheiro! Já seu filho, apanhador.</ZapAnswer>
            <Buttons>
            <No>
                Não lembrei
            </No>
            <Almost>
                Quase não lembrei
            </Almost>
            <Yes>
                Zap!
            </Yes>
          </Buttons>
        </Answers>
    </div>

</div>
</Container>

    <Footer
    >
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
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const PerguntaDois = styled.div`
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
display: ${(props) => (props.questionTwo ? 'none' : '')}
`;

const PerguntaTres = styled.div`
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
`;

const PerguntaQuatro = styled.div`
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
`;

const Frontface = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:163px;
`;

const FrontfaceUm = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:163px;
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const FrontfaceDois = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:163px;
display: ${(props) => (props.questionTwo ? 'none' : '')}
`;


const Question = styled.p`
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
`;

const QuestionOne = styled.p`
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const QuestionDois = styled.p`
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
display: ${(props) => (props.questionTwo ? 'none' : '')}
`;

const SetaPlay = styled.img`
width: 20px;
height: 23px;
`;

const SetaPlayOne = styled.img`
width: 20px;
height: 23px;
display: ${(props) => (props.questionOne ? 'none' : '')}
`;

const SetaPlayDois = styled.img`
width: 20px;
height: 23px;
display: ${(props) => (props.questionTwo ? 'none' : '')}
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
display: ${(props) => (props.questionOne ? 'initial' : 'none')}
`;

const BackfaceDois = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display: ${(props) => (props.questionTwo ? '' : 'none')}
`;

const BackfaceTres = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display: none
`;

const BackfaceQuatro = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display: none
`;

const Answers = styled.div`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display:none
`;

const SetaVirar = styled.img`
position:absolute;
bottom:10px;
left:255px;
width: 30px;
height: 20px;
`;

const SetaVirarUm = styled.img`
position:absolute;
bottom:10px;
left:255px;
width: 30px;
height: 20px;
display: ${(props) => (props.questionOne ? '' : 'none')}
`;

const ZapQuestion = styled.p`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display:none
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
color: #333333
display: ${(props) => (props.questionOne ? '' : 'none')}
`;

const ZapAnswer = styled.p`
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 300px;
height: 131px;
margin-bottom:23px;
position:relative;
display:none
`;

const Buttons = styled.button`
display:flex;
gap:8px;
margin-top:40px;
margin-left:14px;
`;

const No = styled.button`
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
border:none
`;

const Almost = styled.button`
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
border:none
`;

const Yes = styled.button`
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
border:none
`;
