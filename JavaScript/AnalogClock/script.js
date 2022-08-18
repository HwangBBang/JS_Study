window.addEventListener("load",function(){
    clockRun();
    }
);

function clockRun(){
    let times = new Date();
    let second = times.getSeconds();
    let secondAngle = second * 6   //초당 6 초 회전
    let secondAngleValue = `rotate ${secondAngle} deg`;
    document.getElementById("analogSecond").style.transform = secondAngleValue;


    setTimeout(clockRun, 1000);
}