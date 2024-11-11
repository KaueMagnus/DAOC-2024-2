import React, { useState } from 'react';

import Weeelcome from './components/Weelcome';
import Input from './components/input/Input';
import Header from './components/header/Header';
import ExibirCard from './components/CardShow';

function App() {
  const [cardsData, setCardsData] = useState([]); 

  const addCard = (newCard) => {
    setCardsData([...cardsData, newCard]); 
  };

  return (
    <>
      <Header
        title={"Entrevero"}
      />
      <Weeelcome name={"Kaue"} />
      <div style={{display:"flex", justifyContent: "space-evenly"}}>
      <ExibirCard cardsData={cardsData} />
      
      { }
      <Input addCard={addCard} />
      </div>
    </>
  );
}

export default App;