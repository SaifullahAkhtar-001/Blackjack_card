let cards= []
let hasJackblack = false
let isAlive = false
let sum = 0
let massage = ""
let massageZx = document.querySelector("#massage-zx")
let personEl = document.querySelector(".person-el")
let sumEl = document.querySelector("#sum-el")
let idEl = document.querySelector("#id-el")

player = {
    name: "Jayson",
    prize: "150"
}
personEl.textContent = player.name + " : $" + player.prize
function randomCard(){
    randomNumbers = Math.floor( Math.random()*13) + 1
    if( randomNumbers === 1){
        return 11
    }
    else if(randomNumbers>10){
        return 10
    }
    else{
        return randomNumbers
    }
}

function startGame(){
    isAlive = true
    let FirstCard = randomCard()
    let SecondCard = randomCard()
    cards = [FirstCard, SecondCard]
    sum = FirstCard + SecondCard
    renderGame()
}

function renderGame(){
    idEl.textContent = "Card: "
    for(let i=0; i < cards.length; i++){
        idEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        massage = "Do you want to draw a new card"
    }
    else if (sum === 21){
        massage = "Wohoo! You've got Blackjack!"
        hasJackblack = true
    }
    else{
        massage = "You're out of the game!"
        isAlive = false
    }
    massageZx.textContent = massage
}
function addCard(){
    if( isAlive === true && hasJackblack === false){
        let  card = randomCard()
        sum += card
        cards.push( card )
        console.log(cards[2])
        renderGame()
        }
    else{
        massageZx.textContent = "Game Over Best of Luck Next Time"
    }
    }
