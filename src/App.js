import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';


function App(props) {
  let [colors, setColors]= useState(["violet", "lightblue", "purple", "black", "blue", "yellow", "red", "orange", "greenyellow"])
  const addColor = (newColor) =>{
    setColors([...colors, newColor])
  }
  let colorMap = colors.map((color, i)=>{
    return(  <ColorBlock color={color}/>)
  })
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;   
