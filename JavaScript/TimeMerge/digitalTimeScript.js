const timeSpan = document.getElementById("digitalTimes")
const secSpan = document.getElementById("digitalSec")


    function getTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        
        month = month < 9? `0${month+1}` : month+1
        date = date < 10? `0${date}`: date
        sec = sec < 10? `0${sec}`: sec
        min = min < 10? `0${min}`: min


        if (hour > 12){
            timeSpan.textContent = `${year}년 ${month}월 ${date}일 오후 ${hour-12}시 ${min}분`;
            secSpan.textContent =`${sec}초`;
            if (sec > 49 && sec <= 59){
                secSpan.style.color = "red";
            }
            else{
                secSpan.style.color = "black"
            }
        }
        else{
            timeSpan.textContent = `${year}년 ${month}월 ${date}일 오전 ${hour}시 ${min}분`;
            secSpan.textContent =`${sec}초`;
            if (sec > 49 && sec <= 59){
                secSpan.style.color = "red"
            }
            else{
                secSpan.style.color = "black"
            }
        }
        
    }
window.addEventListener("load",function(){
    clockRun();
    }
);

    getTime();
    setInterval(getTime,1000);
