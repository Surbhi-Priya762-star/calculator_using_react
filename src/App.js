import React from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";

import "./css/calculator.css";
import {evaluate} from "mathjs"


import { useState } from 'react';

function App() {

  const [expression, setExpression] = useState('');
  const handleClick =(value) => {

    if(value === '='){
        const result = evaluate( expression);
        setExpression(result);
        return;
    }
    setExpression(expression + value);
}
  
  return (
    <div className='calculator'>
        <Screen expression={expression}/>
        <Keypad expression={expression} setExpression={setExpression} handleClick={handleClick}/>
    </div>
  );
}

export default App;