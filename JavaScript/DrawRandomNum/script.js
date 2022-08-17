//선택
const draw1000Button = document.querySelector("#draw1000")
const draw5000Button = document.querySelector("#draw5000")
let numsDiv = document.querySelector(".lottoNums")
//빈 배열
let arrayNumbers = []  // 로또번호 6개를 넣을 빈 배열
let rowBox = []        // 로또번호 6개로 이루어진 배열 다섯개를 넣을 빈 배열

// 구간별 색깔       1~9       10~19     20~29   30~39      40~45
const colors = ['crimson','olivedrab','coral','violet','royalblue']

//  #.0 복권 번호 추첨 머신 설계도
//  #.1 숫자중 랜덤으로 6개 선택한다. (O)
//  #.2 숫자중 랜덤으로 6개 선택한 배열 5개를 만든다. (O)
//  #.3 한 개의 배열의 각 인덱스를 (forEach) 하나씩 방문한다.
//  #.4 1000원 - 방문한 인덱스를 1초 간격으로 그린다.
//  #.5 5000원 - 5개의 배열을 동시에 각 인덱스를 (forEach) 하나씩 방문한다.

// 생성된 배열 지우기
function resetOneLine(){
  arrayNumbers = [];
  numsDiv.innerHTML = ""
}

// 1개의 배열에 6개 랜덤 숫자 생성 (중복X)
function makeOneLineNum(){
  while(arrayNumbers.length < 6){
    let ranNum =  Math.floor(Math.random() * 45) + 1;   // 1~45 랜덤 숫자 생성

    if(arrayNumbers.indexOf(ranNum) === -1){        // ranNum 이 arrayNumbers 에 없다면~
    arrayNumbers.push(ranNum)};                     //  arrayNumbers에 ranNum을 추가한다.
  }
  return arrayNumbers;
}

// 5개의 배열에 6개 랜덤 숫자 생성 (중복X)
function makeFiveLineNum(){
  for(let j =0;j < 5;j+=1){
    resetOneLine();
    rowBox.push(makeOneLineNum());
  }
  return rowBox;
}

// 숫자 6개 한 줄 그리기
let colorIndex;

function paintNumber(theArray){
  for(let i = 0;i<6;i+=1){  
    const eachNumDiv = document.createElement('div')  //div 태그 만들기
    colorIndex = Math.floor(theArray[i]/10);
    eachNumDiv.classList.add('eachnum');
    eachNumDiv.style.backgroundColor = colors[colorIndex];
    eachNumDiv.textContent = theArray[i]
    numsDiv.appendChild(eachNumDiv)     // lotto번호 생성될 박스태그 이하에 만든 div 넣기
  }
}

// 1000원 버튼 눌러 배열 1개 생성
draw1000Button.addEventListener("click",function(){ // 클릭 했을 때 
  resetOneLine();
  paintNumber(makeOneLineNum())
  console.log(arrayNumbers);
  }
)

//5000원 버튼 누를 시 배열 5개 생성
draw5000Button.addEventListener("click",function(){
  rowBox =[]
  makeFiveLineNum();
  for(let i=0;i<6;i+=1){
    // paintNumber(rowBox[i]);
    
    // 여기다 <br> 넣고싶음!!!!!!!!!!
    // numsDiv.innerHTML = 
  }
  console.log(rowBox);
  }
)



