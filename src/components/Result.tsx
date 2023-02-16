import {useEffect, useState} from "react";
import {result} from "./dummylist";
import {IType} from "../App";

type ResultProps={
    type:IType
}

const Result = ({type}:ResultProps) =>{

  const [mbti,setMbti] = useState("");

  useEffect(() => {
      let a = "";

      type.E > 1 ? a += "E" : a += "I";
      type.S > 1 ? a += "S" : a += "N";
      type.T > 1 ? a += "T" : a += "F";
      type.J > 1 ? a += "J" : a += "P";
      console.log(a);
      setMbti(a);
    },
    [])

  return(
    <>
      {
        result.filter((item) => item.MBTI === mbti).map((item) => (
          <div key = {item.MBTI}>
            <p>당신의 음악 장르 : {item.genre}</p>
            <p>{item.subtitle}</p>
            <p>{item.explain}</p>
            <p>{item.sub_explain}</p>
            <p>환상의 케미 : {item.chemibox}</p>
          </div>
        ))

      }

    </>
  )
}

export default Result;
