document.getElementById("begin").addEventListener("click", dealPlayerCards);
document.getElementById("stick").addEventListener("click", dealDealer);
let beginCardNumber = 2;
let playerVal = 0;
let dealerVal = 0;

let player = {
    chips: 200,
    card1: 0,
    card2: 0,
}

let dealer ={
    card1: 0,
    card2: 0,
}

function dealPlayerCards(){
    player.card1 = Math.floor(Math.random() * 51);
    player.card2 = Math.floor(Math.random() * 51);
    dealer.card1 = Math.floor(Math.random() * 51);
    dealer.card2 = Math.floor(Math.random() * 51);
    playerVal = 0;
    dealerVal = 0;

    while(player.card1 == player.card2){
        player.card2 = Math.floor(Math.random() * 51);
    }
    cardVal = 0;
    getCardStrings("c1",player.card1)
    getCardStrings("c2",player.card2)
    alterValue("player", player.card1)
    alterValue("player", player.card2)
    getCardStrings("d1",dealer.card1)
    getCardStrings("d2",dealer.card2)
    alterValue("dealer", dealer.card1)
    alterValue("dealer", dealer.card2)
}

function displayPlayerCards(display1, position){
    document.getElementById(position).src = "/blackjack project/Single Cards (One Per FIle)/" + display1 + ".svg"
}
function alterValue(person, cardVal){
    alteredValue = 0;
    if(cardVal % 13 <= 9 && cardVal%13 != 0){
        alteredValue = (cardVal%13)+1;
    }
    else if((cardVal % 13) != 0){
        alteredValue = 10;
    }
    if(person == "player"){
        playerVal = playerVal + alteredValue;
    }
    else{
        dealerVal = dealerVal + alteredValue;
    }
    updateVals()

}

function updateVals(){
        document.getElementById("cardVal").innerHTML = playerVal;
}

function getCardStrings(position, card1){
    let display1 = "";
    if(card1 < 13){
        if(card1%13 < 10){
            display1 = "CLUB-" + (card1+1)
        }
        if(card1%13 == 10){
            display1 = "CLUB-" + (card1+1) + "-JACK"
        }
        if(card1%13 == 11){
            display1 = "CLUB-" + (card1+1) + "-QUEEN"
        }
        if(card1%13 == 12){
            display1 = "CLUB-" + (card1+1) + "-KING"
        }
        displayPlayerCards(display1, position)
    }
    else if(card1 < 26){
        card1 = card1 % 13
        if(card1%13 < 10){
            display1 = "DIAMOND-" + (card1+1)
        }
        if(card1%13 == 10){
            display1 = "DIAMOND-" + (card1+1) + "-JACK"
        }
        if(card1%13 == 11){
            display1 = "DIAMOND-" + (card1+1) + "-QUEEN"
        }
        if(card1%13 == 12){
            display1 = "DIAMOND-" + (card1+1) + "-KING"
        }
        displayPlayerCards(display1, position)
    }
    else if(card1 < 39){
        card1 = card1 % 13
        if(card1%13 < 10){
            display1 = "HEART-" + (card1+1)
        }
        if(card1%13 == 10){
            display1 = "HEART-" + (card1+1) + "-JACK"
        }
        if(card1%13 == 11){
            display1 = "HEART-" + (card1+1) + "-QUEEN"
        }
        if(card1%13 == 12){
            display1 = "HEART-" + (card1+1) + "-KING"
        }
        displayPlayerCards(display1, position)
    }
    else{
        card1 = card1 % 13
        if(card1%13 < 10){
            display1 = "SPADE-" + (card1+1)
        }
        if(card1%13 == 10){
            display1 = "SPADE-" + (card1+1) + "-JACK"
        }
        if(card1%13 == 11){
            display1 = "SPADE-" + (card1+1) + "-QUEEN"
        }
        if(card1%13 == 12){
            display1 = "SPADE-" + (card1+1) + "-KING"
        }
        displayPlayerCards(display1, position)
    }
}

function dealDealer(){
    if(dealerVal < 17){
        hit("dealer")
    }
    else{
        finishPlay()
    }
}
function hit(player){

}
function finishPlay(){
    if(playerVal > dealerVal){
        document.getElementById("display-winner").innerHTML = "playerWins"
    }
    else if(playerVal == dealerVal){
        document.getElementById("display-winner").innerHTML = "draw"
    }
    else{
        document.getElementById("display-winner").innerHTML = "dealerWins"
    }

    // dealPlayerCards();
}