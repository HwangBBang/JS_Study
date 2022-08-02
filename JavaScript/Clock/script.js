
const h1 = document.getElementById("time");

function getTime(){
    const date = new Date();    //Date() 는 JS 의 내장 객체 
    const hour = date.getHours();   // Date()로 가져온 날짜의 현지 시 가져오기
    const minutes = date.getMinutes();  // Date()로 가져온 날짜의 현지 분 가져오기
    const seconds = date.getSeconds();  // Date()로 가져온 날짜의 현지 초 가져오기
    const numDay = date.getDate();  //일
    let day = date.getDay();  //요일
    const month = date.getMonth();
    const year = date.getFullYear();
    switch (day){
        case 0:
            day = "일";
            break;
        case 1:
            day = "월";
            break;
        case 2:
            day = "화";
            break;
        case 3:
            day = "수";
            break;
        case 4:
            day = "목";
            break;
        case 5:
            day = "금";
            break;
        case 6:
            day = "토";
            break;
    }


    const time =
    `${year}년 ${month+1}월 ${numDay}일(${day})
    ${hour}시 ${minutes}분 ${seconds}초`;
    h1.textContent = time;
}

setInterval(getTime,250);
    // 함수 호출