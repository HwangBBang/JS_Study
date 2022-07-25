let curIndex = 0;  //현재 보여지는이미지의 인덱스 0~4까지
let positionValue = 0; // 이미지 태그의 위치값을 지정할 변수
const IMAGE_WIDTH = 640;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelector('.images');

function pressNext(){
    if (curIndex < 4){
        prevButton.removeAttribute('disabled');
        positionValue -= IMAGE_WIDTH;
        images.style.transform =`translateX(${positionValue}px)`
        curIndex += 1;
    }
    if (curIndex === 4){
        nextButton.setAttribute('disabled','true');    
    }
}
function pressPrev(){
    if (curIndex > 0){
        nextButton.removeAttribute('disabled');
        positionValue += IMAGE_WIDTH;
        images.style.transform =`translateX(${positionValue}px)`
        curIndex -= 1;
    }
    if (curIndex === 0){
        prevButton.setAttribute('disabled','true');    
    }
}
function init(){
    prevButton.setAttribute('disabled','true');
    nextButton.addEventListener("click", pressNext);
    prevButton.addEventListener("click", pressPrev);
}



init();