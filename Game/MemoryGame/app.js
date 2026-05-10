"use strict";

const cards = [];
let prevCard = null;
let flipTime = NaN;

function init(){
    for(let i = 1; i < 14; i++){
        cards.push(i);
        cards.push(i);
        cards.push(i);
        cards.push(i);
    }
    // console.log(cards);
    shuffle(cards);
    

    // make table
    let table = document.getElementById("table");
    for(let i = 0; i < 4; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j < 13; j++){
            let td = document.createElement("td");
            td.className = "card back";
            td.value = cards[4 * j + i];
            //td.textContent = td.value;
            td.onclick = flip;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }


}

function shuffle(str){
    let len = str.length;
    while(len){
        let i1 = len - 1;
        let i2 = Math.floor(Math.random() * len);
        let tmp = str[i1];

        str[i1] = str[i2];
        str[i2] = tmp;
        len -= 1;
    }
}

function flip(e){
    let card = e.target;
    if(flipTime || card.textContent != ""){
        return;
    }

    card.className = "card";
    card.textContent = card.value;

    
    if(prevCard == null){
        prevCard = card;
        return;
    }

    if(prevCard.value != card.value){
        flipTime = setTimeout(function (){
            card.className = "card back";
            card.textContent = "";
            prevCard.className = "card back";
            prevCard.textContent = "";
            prevCard = null;
            flipTime = NaN;
            change();
        }, 1000);
    }else{
        pointUp();
        pairs++;
        prevCard = null;
        isFin();
    }
}

 // turn
    let player1 = "";
    let score1 = 0;
    let player2 = "";
    let score2 = 0;
    let turn = true;
    let pairs = 0;

    function setPlayers(){
        player1 = document.getElementById("p1").value;
        player2 = document.getElementById("p2").value;
        
        document.getElementById("turn").textContent = player1;
        document.getElementById("name1").textContent = player1;
        document.getElementById("name2").textContent = player2;
    }

    function change(){
        turn = !turn;
        
        if(turn) document.getElementById("turn").textContent = player1;
        else document.getElementById("turn").textContent = player2;
    }

    function pointUp(){
        if(turn){
            score1 += 10;
            document.getElementById("score1").textContent = score1;
        }else{
            score2 += 10;
            document.getElementById("score2").textContent = score2;
        }
    }

    function isFin(){
        if(pairs != 26) return;
        let win = document.getElementById("winner")
        if(score1 > score2) win.textContent = player1 + "の勝ち！！！"
        else if(score1 == score2) win.textContent = "同点！！！"
        else if(score1 < score2) win.textContent = player2 + "の勝ち！！！"
    }
