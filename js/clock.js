const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${min}:${sec}`;
}

// console.log(date.getDate());

getClock();
// 1초마다
setInterval(getClock, 1000);

// 1초뒤
// setTimeout(sayHello, 1000);
