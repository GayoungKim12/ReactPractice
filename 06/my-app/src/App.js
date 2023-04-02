// import React, { useState, useEffect } from "react"
// // import Banner from "./components/Banner";
// // import BusinessCard from "./components/BusinessCard";
// import datas from "./components/cards.js"
import CatParent from "./components/CatParent";
import ToDoList from "./components/ToDoList";
// import SimpleForm from "./components/SimpleForm";
// import UnControlledForm from "./components/UncontrolledForm";

function App() {
  /* const [ cards, setCards ] = useState([])
  const [ pickedCards, setPickedCards ] = useState([])
  
  function draw() {
    if(pickedCards.length === 3) {
      let count = 0
      const names = pickedCards.reduce((acc, cur) => {
        count++
        return acc.concat(`${cur.name}${count !== 3 ? ", " : ""}`)
      }, "")
      return alert(`당첨자는 ${names}입니다`)
    }
    const randomIdx = Math.floor(Math.random() * cards.length)
    const randomCard = cards[randomIdx]
    
    setCards(cards.filter((card) => card.phoneNumber !== randomCard.phoneNumber))
    
    setPickedCards([...pickedCards, randomCard])
  }
  
  useEffect(() => {
    setCards(datas)
    return () => {

    }
  }, [])

  const result = pickedCards.map((pickedCard) => {
    return <BusinessCard info={pickedCard} key={pickedCard.phoneNumber}/>
  }) */
  
  return (
    <div>
      {/* <Banner /> */}
      {/* {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && result} */}
      {/* <SimpleForm /> */}
      {/* <UnControlledForm /> */}
      {/* <CatParent /> */}
      <ToDoList />
    </div>
  );
}

export default App;
