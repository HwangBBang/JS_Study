const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

const arrayNumbers = []
const colors = ['crimson','olivedrab','coral','violet','royalblue']

function paintNumber(number){
    const eachNumDiv = document.createElement('div')
    let colorIndex = Math.floor(number / 10)
    
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

drawButton.addEventListener("click",function(){
    while(arrayNumbers.length < 6){
       let ranNum =  Math.floor(Math.random() * 45) + 1
        if(arrayNumbers.indexOf(ranNum) === -1)
        arrayNumbers.push(ranNum)
        paintNumber(ranNum)
    }
})

resetButton.addEventListener("click", function(){
    arrayNumbers.splice(0,6)
    numbersDiv.innerHTML = ""
})