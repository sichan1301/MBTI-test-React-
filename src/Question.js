const Question = ({onAddType,number,setNumber}) =>{

  const question =[
    {title:"내 플레이리스트를 더 많이 차지하고 있는 음악은?",  type:"E", button1:"유행에 뒤쳐질 수는 없지! 모르는 사람 없는 핫한 유행곡!",button2:"이 노래 아는 사람 나밖에 없을 걸? 숨겨진 명곡!"},
    {title:"시험 일주일 전, 공부하려고 했는데 친구가 야 노래방 가자! 한다면?", type:"J", button1:"아 노래방 겁나 땡기는데,,, 안돼. 오늘 여기까지 끝내야 돼.",button2:"아 공부해야 되는데,,, 갔다 와서 더 열심히 하지 뭐!! 놀자!!"},
    {title:"나는 한 번 들은 노래를",  type:"S", button1:"잘 기억하는 편이다.",button2:"한 번 듣고 어떻게 기억해?"},
    {title:"노래를 들을 때",  type:"S", button1:"가사를 잘 몰라도 멜로디를 흥얼거린다.",button2:"가사를 꼭 찾아보는 편이다."},
    {title:"급하게 해야 할 일이 생겼다.", type:"J", button1:"뭐부터 해야 되는지 계획부터 짠다.",button2:"뭐라도 시작부터 한다."},
    {title:"이 노래 진짜 좋다.내 인생 곡을 찾았다면?",  type:"E", button1:"야야 이 노래 들어봐! 여기저기 홍보하고 다닌다.",button2:"혼자 감탄하면서 반복재생 한다."},
    {title:"플레이리스트 좀 채워볼까",  type:"S", button1:"늘 내가 좋아하는 장르나 가수의 노래를 선택한다.",button2:"종종 새로운 장르나 가수의 노래를 찾아 들어본다."},
    {title:"친구가 본인의 노래실력을 평가해달라고 음성 파일을 보내줬다.",  type:"T", button1:"‘평가가 필요하겠지...’ 잘 들어보고 솔직하게 말 해준다.",button2:"‘평가를 해달라고?’ 당황스럽다. 들어보기도 전부터 조심스럽다."},
    {title:"길을 가다가 얼굴만 아는 동기를 마주쳤다.",  type:"E", button1:"반갑게 인사하고 지나간다",button2:"통화하는 척 하거나 못 본 척 돌아간다."},
    {title:"친구가 “나 어제 중요한 시험 있었는데 떨어졌어.” 라고 연락이 왔다. 먼저 나오는 반응은?",  type:"T", button1:"아 진짜? 무슨 시험이었는데? 오래 준비했어?",button2:"에구, 열심히 준비했을 텐데 아쉽겠다."},
    {title:"슬픈 이별노래를 들었다. 먼저 드는 생각은?",  type:"T", button1:"어떻게 이런 가사를 썼을까?",button2:"흑... 너무 슬퍼ㅜㅠ"},
    {title:"길을 지나가다가 내 취향의 노래를 들었다.", type:"J", button1:"무슨 노래인지 바로 찾아본다.",button2:"‘이따 집 가서 찾아봐야지.’ 하고 까먹는다."},
  ]

  const questionObject = {
    1: {title:"내 플레이리스트를 더 많이 차지하고 있는 음악은?",  type:"E", button1:"유행에 뒤쳐질 수는 없지! 모르는 사람 없는 핫한 유행곡!",button2:"이 노래 아는 사람 나밖에 없을 걸? 숨겨진 명곡!"},
    2: {title:"시험 일주일 전, 공부하려고 했는데 친구가 야 노래방 가자! 한다면?", type:"J", button1:"아 노래방 겁나 땡기는데,,, 안돼. 오늘 여기까지 끝내야 돼.",button2:"아 공부해야 되는데,,, 갔다 와서 더 열심히 하지 뭐!! 놀자!!"},
    3: {title:"나는 한 번 들은 노래를",  type:"S", button1:"잘 기억하는 편이다.",button2:"한 번 듣고 어떻게 기억해?"},
    4: {title:"노래를 들을 때",  type:"S", button1:"가사를 잘 몰라도 멜로디를 흥얼거린다.",button2:"가사를 꼭 찾아보는 편이다."},
    5: {title:"급하게 해야 할 일이 생겼다.", type:"J", button1:"뭐부터 해야 되는지 계획부터 짠다.",button2:"뭐라도 시작부터 한다."},
    6: {title:"이 노래 진짜 좋다.내 인생 곡을 찾았다면?",  type:"E", button1:"야야 이 노래 들어봐! 여기저기 홍보하고 다닌다.",button2:"혼자 감탄하면서 반복재생 한다."},
    7: {title:"플레이리스트 좀 채워볼까",  type:"S", button1:"늘 내가 좋아하는 장르나 가수의 노래를 선택한다.",button2:"종종 새로운 장르나 가수의 노래를 찾아 들어본다."},
    8: {title:"친구가 본인의 노래실력을 평가해달라고 음성 파일을 보내줬다.",  type:"T", button1:"‘평가가 필요하겠지...’ 잘 들어보고 솔직하게 말 해준다.",button2:"‘평가를 해달라고?’ 당황스럽다. 들어보기도 전부터 조심스럽다."},
    9: {title:"길을 가다가 얼굴만 아는 동기를 마주쳤다.",  type:"E", button1:"반갑게 인사하고 지나간다",button2:"통화하는 척 하거나 못 본 척 돌아간다."},
    10: {title:"친구가 “나 어제 중요한 시험 있었는데 떨어졌어.” 라고 연락이 왔다. 먼저 나오는 반응은?",  type:"T", button1:"아 진짜? 무슨 시험이었는데? 오래 준비했어?",button2:"에구, 열심히 준비했을 텐데 아쉽겠다."},
    11: {title:"슬픈 이별노래를 들었다. 먼저 드는 생각은?",  type:"T", button1:"어떻게 이런 가사를 썼을까?",button2:"흑... 너무 슬퍼ㅜㅠ"},
    12: {title:"길을 지나가다가 내 취향의 노래를 들었다.", type:"J", button1:"무슨 노래인지 바로 찾아본다.",button2:"‘이따 집 가서 찾아봐야지.’ 하고 까먹는다."},
  }

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
        <p>{questionObject[number].title}</p>
        <p onClick = {handleButton1} >{questionObject[number].button1}</p>
        <p onClick = {handleButton2} >{questionObject[number].button2}</p>
      </div>
    </>
  )
}

export default Question;
