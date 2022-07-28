let minutes = 0 ;
let seconds = 0 ;
let tenMillis = 0;

let r_minutes = 0 ;
let r_seconds = 0 ;
let r_tenMillis = 0;

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

let intevalId;

buttonStart.onclick = function(){
    intevalId = setInterval(operateTimer ,10);
}

buttonbStop.onclick=function(){
    clearInterval(intevalId);
}

buttonRecord.onclick=function(){
    r_minutes = minutes; r_seconds = seconds ;r_tenMillis = tenMillis;
    recordMin.textContent = r_minutes> 9 ? r_minutes : "0"+ r_minutes;
    recordSec.textContent = r_seconds> 9 ? r_seconds : "0"+ r_seconds;
    recordTen.textContent = r_tenMillis> 9 ? r_tenMillis : "0"+ r_tenMillis;
}

buttonReset.onclick=function(){
    clearInterval(intevalId);
    tenMillis = 0; seconds = 0; minutes = 0;
    r_minutes = 0; r_seconds = 0; minutes = 0;
    appendTen.textContent = "00"; appendSec.textContent = "00"; appendMin.textContent = "00";
    recordMin.textContent ="00";recordSec.textContent="00";recordTen.textContent="00";
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