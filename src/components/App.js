import React, { useState } from 'react';
import Flashcard from './Flashcard';


export default function App() {

    const cards = [
        { question: "Qual era o animago de Lupin?", answer: "Pegadinha! Lupin não era um animago, mas um lobisomem" }
    ]

   return(
    <Flashcard cards={cards}/>
   )
}