let minutes = 0 ;
let seconds = 0 ;
let tenMillis = 0;

let r_minutes = 0 ;
let r_seconds = 0 ;
let r_tenMillis = 0;

let record_list = [];

const appendTen = document.getElementById("tenMillis");
const appendSec = document.getElementById("sconeds");
const appendMin = document.getElementById("minutes");
const buttonStart = document.getElementById("bt_start");
const buttonbStop = document.getElementById("bt_stop");
const buttonReset = document.getElementById("bt_reset");
const buttonRecord = document.getElementById("bt_record");
const recordTen = document.getElementById("r_tenMillis");
const recordSec = document.getElementById("r_sconeds");
const recordMin = document.getElementById("r_minutes");
const recordTimes = document.getElementById("r_times");

let step;
let intevalId;
let lapNum;

buttonStart.onclick = function(){
    clearInterval(intevalId);
    intevalId = setInterval(operateTimer ,10);
}

buttonbStop.onclick=function(){
    if(intevalId!=null){clearInterval(intevalId);}
}
//record를 
buttonRecord.onclick=function(){
// last lap
    r_minutes = minutes; r_seconds = seconds ;r_tenMillis = tenMillis;
    recordMin.textContent = r_minutes> 9 ? r_minutes : "0"+ r_minutes;
    recordSec.textContent = r_seconds> 9 ? r_seconds : "0"+ r_seconds;
    recordTen.textContent = r_tenMillis> 9 ? r_tenMillis : "0"+ r_tenMillis;
// 레코드 리스트 
    lapNum = record_list.length+1
    record_list.push("#"+lapNum+'. '+recordMin.textContent +' : '+ recordSec.textContent +' : '+ recordTen.textContent);
    console.log(record_list.length)
// 레코드 리스트 요소들을 전부 출력 all lap
    recordTimes.innerHTML = record_list.join('<br>');
    }


buttonReset.onclick=function(){
    clearInterval(intevalId);
    tenMillis = 0; seconds = 0; minutes = 0;
    r_minutes = 0; r_seconds = 0; minutes = 0;
    appendTen.textContent = "00"; appendSec.textContent = "00"; appendMin.textContent = "00";
    recordMin.textContent ="00";recordSec.textContent="00";recordTen.textContent="00";
    record_list = [];recordTimes.innerHTML = "#1. 00 : 00 : 00";
}





//10ms 마다 숫자 증가
function operateTimer(){
    tenMillis++;
    appendTen.textContent = tenMillis > 9 ? tenMillis : "0"+ tenMillis;
    if (tenMillis > 99){
        seconds++;
        appendSec.textContent = seconds > 9 ? seconds : "0"+ seconds;;
        tenMillis = 0;
        appendTen.textContent = "00";
    }

    if(seconds > 59 ){
            minutes++;
            appendMin.textContent = minutes > 9 ? minutes : "0"+ minutes;;
            seconds = 0;
            appendMin.textContent = "00";
        }
}

function resetTimer(){}