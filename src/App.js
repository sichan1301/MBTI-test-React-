import './App.css';
import Question from './Question';
import Result from './Result';

import {useEffect, useRef, useState} from "react";

  function App() {
    const [number,setNumber] = useState(1);
    const [type,setType] = useState({
      E:0,
      S:0,
      T:0,
      J:0
    })

    const onAddType = (targetType) =>{
      setType({
        ...type,
        [targetType]:Number(type[targetType])+1
      })
    }

    return (
    <div className="App">
      {
        number > 11
        ? <Result type={type} />
        : <Question onAddType={onAddType} setNumber={setNumber} number={number} />
      }
    </div>
  );
}

export default App;
