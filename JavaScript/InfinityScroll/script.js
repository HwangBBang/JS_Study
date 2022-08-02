var count = 7;

window.onscroll = function(){
    if ((window.innerHeight+window.scrollY) 
    >= document.body.offsetHeight)
    {
        //div 태그 생성 
        var toAdd = document.createElement("div");
        //div 태그는 box 라는 클래스를 갖는다.
        toAdd.classList.add("box")
        //태그 내부의 문자열 표시
        toAdd.textContent = `${++count}번째 블록`
        //태그를 추가한다. 'section'에 
        document.querySelector('section').appendChild(toAdd);
    }
}

//window.innerHeight : 사용자가 보이는 영역의 높이

//window.scrollY : 초기값 0, 스크롤이 얼마나 이동했는지 

//document.body.offsetHeight  :  요소가 갖는 실제 높이 
//                          (사용자가 보이는 영역 + 가려진 영역)