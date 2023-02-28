import logo from '../assets/logo.png';
import seta_play from '../assets/seta_play.png';
import styled from "styled-components";


export default function App() {
    return(
<div className="container">

        <div className="topo">
            <img className="logo" src={logo} alt='logo'/>
            <div className='nome'>ZapRecall</div>
        </div>

    <div className='perguntas'>
        <div className='pergunta'>
            <p className='pergunta-number'>Pergunta 1</p>
            <img className="seta-play" src={seta_play} alt='seta-play'/>
        </div>
        <div className='pergunta'>
            <p className='pergunta-number'>Pergunta 2</p>
            <img className="seta-play" src={seta_play} alt='seta-play'/>
        </div>
        <div className='pergunta'>
            <p className='pergunta-number'>Pergunta 3</p>
            <img className="seta-play" src={seta_play} alt='seta-play'/>
        </div>
        <div className='pergunta'>
            <p className='pergunta-number'>Pergunta 4</p>
            <img className="seta-play" src={seta_play} alt='seta-play'/>
        </div>
    </div>

    <div className='footer'>
        <p className='concluidos'>0/4 CONCLUÍDOS</p>
    </div>

 </div>
 )
}