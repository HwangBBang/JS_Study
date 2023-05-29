const quotes = [
  { quote: "황빵은 신이다.", author: "HwangBBang" },
  { quote: "황탱은 바보이다.", author: "HwangBBang" },
  { quote: "황탱은 29살이다.", author: "HwangBBang" },
  { quote: "황빵은 매번 금연에 실패한다.", author: "HwangBBang" },
  { quote: "황빵은 방구머신이다.", author: "HwangTaeng" },
  { quote: "카중은 맛있다.", author: "HwangTaeng" },
  { quote: "SBS는 악덕기업이다.", author: "HwangTaeng" },
  { quote: "탁구는 재미있다.", author: "HwangTaeng" },
  { quote: "무인탁구장은 넘비이다.", author: "HwangTaeng" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = parseInt(Math.random() * quotes.length);
quote.innerText = quotes[randomNum].quote;
author.innerText = `- ${quotes[randomNum].author}- `;
