import logo from '../assets/logo.png';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import styled from "styled-components";
import React, { useState } from 'react';




export default function App() {
    const [number, setNumber] = useState(0)
    return(
<div ClassName="tela">
<div className="container">

        <div className="topo">
            <img className="logo" src={logo} alt='logo'/>
            <div className='nome'>ZapRecall</div>
        </div>

<div className='perguntas'>

     <div className="pergunta-um">
        <div className='pergunta'>
            <div className="front-face">
                <p className='pergunta-number'>Pergunta 1</p>
                <img className="seta-play" src={seta_play} alt='seta-play'/>
            </div>
        </div>
        <div className="back-face none">
            <p className='pergunta-question'>Quando é o aniversário de Harry Potter?</p>
            <img className="seta-virar" src={seta_virar} alt='seta-virar'/>
        </div>
        <div className="answers none">
            <p className='resposta-question'>31 de julho</p>
            <div className="buttons">
            <button className="no">
                Não lembrei
            </button>
            <button className="almost">
                Quase não lembrei
            </button>
            <button className="yes">
                Zap!
            </button>
          </div>
        </div>
    </div>


    <div className="pergunta-dois">
        <div className='pergunta'>
            <div className="front-face">
                <p className='pergunta-number'>Pergunta 2</p>
                <img className="seta-play" src={seta_play} alt='seta-play'/>
            </div>
        </div>
        <div className="back-face none">
            <p className='pergunta-question'>Qual era o animago de Lupin?</p>
            <img className="seta-virar" src={seta_virar} alt='seta-virar'/>
        </div>
        <div className="answers none">
            <p className='resposta-question'>Pegadinha! Lupin não era um animago, mas um lobisomem</p>
            <div className="buttons">
            <button className="no">
                Não lembrei
            </button>
            <button className="almost">
                Quase não lembrei
            </button>
            <button className="yes">
                Zap!
            </button>
          </div>
        </div>
    </div>

    <div className="pergunta-tres">
        <div className='pergunta'>
            <div className="front-face">
                <p className='pergunta-number'>Pergunta 3</p>
                <img className="seta-play" src={seta_play} alt='seta-play'/>
            </div>  
        </div>
        <div className="back-face none">
            <p className='pergunta-question'>Qual foi a segunda horcrux a ser destruída?</p>
            <img className="seta-virar" src={seta_virar} alt='seta-virar'/>
        </div>
        <div className="answers none">
            <p className='resposta-question'>O anel</p>
            <div className="buttons">
            <button className="no">
                Não lembrei
            </button>
            <button className="almost">
                Quase não lembrei
            </button>
            <button className="yes">
                Zap!
            </button>
          </div>
        </div>
    </div>


    <div className="pergunta-quatro">
        <div className='pergunta'>
            <div className="front-face">
                <p className='pergunta-number'>Pergunta 4</p>
                <img className="seta-play" src={seta_play} alt='seta-play'/>
            </div>  
        </div>
        <div className="back-face none">
            <p className='pergunta-question'>Qual era a posição de Tiago Potter no time de quadribol da Grifinória?</p>
            <img className="seta-virar" src={seta_virar} alt='seta-virar'/>
        </div>
        <div className="answers none">
            <p className='resposta-question'>Ele era artilheiro! Já seu filho, apanhador.</p>
            <div className="buttons">
            <button className="no">
                Não lembrei
            </button>
            <button className="almost">
                Quase não lembrei
            </button>
            <button className="yes">
                Zap!
            </button>
          </div>
        </div>
    </div>

</div>
</div>

    <div className='footer'>
        <p className='concluidos'>{number}/4 CONCLUÍDOS</p>
    </div>

 </div>
 )
}