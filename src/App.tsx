import './App.css';
import Question from './components/Question';
import Result from './components/Result';

import {useState} from "react";

 export interface IType {
    [key:string]:number,
  }

  function App() {
    const [number,setNumber] = useState(1);
    const [type,setType] = useState<IType>({
      E:0,
      S:0,
      T:0,
      J:0
    })

    const onAddType = (targetType:string) =>{
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
