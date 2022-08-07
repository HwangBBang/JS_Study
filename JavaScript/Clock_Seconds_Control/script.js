const timeSpan = document.getElementById("times")
const secSpan = document.getElementById("sec")

    function getTime() { 
        let now = new Date();
        
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        
        sec = sec < 10? `0${sec}`: sec
        min = min < 10? `0${min}`: min


        if (hour > 12){
            timeSpan.textContent = `오후 ${hour-12}시 ${min}분`;
            secSpan.textContent =`${sec}초`;
            if (sec > 49 && sec <= 59){
                secSpan.style.color = "red";
                secSpan.style.fontSize ="36px"
            }
            else{
                secSpan.style.color = "black"
                secSpan.style.fontSize ="32px"
            }
        }
        else{
            timeSpan.textContent = `오전 ${hour}시 ${min}분`;
            secSpan.textContent =`${sec}초`;
            if (sec > 49 && sec <= 59){
                secSpan.style.color = "red"
                secSpan.style.fontSize ="36px"
            }
            else{
                secSpan.style.color = "black"
                secSpan.style.fontSize ="32px"
            }
        }
        
    }
    getTime();
    setInterval(getTime,1000);