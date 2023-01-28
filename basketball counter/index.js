let scoreEl = document.getElementById("score1")
console.log(scoreEl)

let count = 0 

function increment1() {
    count += 1
    scoreEl.textContent = count
} 

function increment2() {
    count +=2
    scoreEl.textContent = count
}

function increment3() {
    count +=3
    scoreEl.textContent = count
}

let scoreLe = document.getElementById("score2")
console.log(scoreLe)

let count2 = 0 

function increase1() {
    count2 += 1
    scoreLe.textContent = count2
} 

function increase2() {
    count2 +=2
    scoreLe.textContent = count2
}

function increase3() {
    count2 +=3
    scoreLe.textContent = count2
}

function reset() {
    count = 0
    count2 = 0
    scoreEl.textContent = count
    scoreLe.textContent = count2
}