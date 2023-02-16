import {question} from "./dummylist";

type QuestionProps ={
  onAddType(value:string):void,
  number:number,
  setNumber(value:number):void
}

const Question = ({onAddType,number,setNumber}:QuestionProps) =>{

  const handleButton2 = () =>{
    setNumber(number+1);
  }

  const handleButton1 = () =>{
    let currentType = question[number].type
    onAddType(currentType);
    handleButton2();
  }


  return(
    <>
      <div>
        <p>{question[number].title}</p>
        <p onClick = {handleButton1} >{question[number].button1}</p>
        <p onClick = {handleButton2} >{question[number].button2}</p>
      </div>
    </>
  )
}

export default Question;
