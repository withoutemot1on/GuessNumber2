'use strict'

let cancel = document.querySelector('#CANCEL,#BACK,#Exit')
let start = document.querySelector('#START')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let userInfo = document.querySelector('#UserInfo')
let userName = document.querySelector('#UserName')
let gameButtons = document.querySelector('#Game')
let enter = document.querySelector('#ENTER')
let buttons = document.querySelector('#Buttons')
let Name = document.querySelector('#Name')
let GameField = document.querySelector('#GameField')
let Timer = document.querySelector('#Timer')
let Game = document.querySelector('#Game')
let Again = document.querySelector('#Again')
let Checked = document.querySelector('#Check')
let Attempts = document.querySelector('#Attempts')
let PlayerNumber = document.querySelector('#number')
let Cong = document.querySelector('#Cong')
let Table = document.querySelector('#Table')
let numCheck = 0;
let RndNumb;

cancel.addEventListener('click',()=>{
    location.href = 'https://yandex.ru/'
})

Again.addEventListener('click',()=>{
    GameField.style.display = 'none'
    Game.style.display = 'block'
    numCheck = 0;
    Attempts.innerHTML = 'Число попыток: ' + numCheck
    clearInterval(gameTimerId)
    RndNumb = 0;
    console.log(RndNumb)
})

enter.addEventListener('click',()=>{
    GameField.style.display = 'block'
    Name.textContent = 'Имя игрока: ' + userName.value
    RndNumb = getRandomNumber(1,100)
    RoundDurationTimer()
    console.log(RndNumb)
    Game.style.display = 'none'
})

start.addEventListener('click',()=>{
    h1.style.display = 'none'
    p.style.display = 'none'
    userInfo.style.display = 'block'
    gameButtons.style.display = 'block'
    buttons.style.display = 'none'
    Check()
})

Checked.addEventListener('click',()=>{
    numCheck++;
    Attempts.innerHTML = 'Число попыток: ' + numCheck
    Proverka()
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Check(){
    if(userName.value.length === 0 ) {
        enter.disabled = true
    }
    userName.addEventListener('blur',()=>{
        if(userName.value.length !== 0 ) {
            enter.disabled = false
        }
        if(userName.value.length === 0 ) {
            enter.disabled = true
        }
    })
}
let gameTimerId;
function RoundDurationTimer() {
    let date2 = new Date(0, 0, 0,0,0 ,0,0)

     gameTimerId = setInterval(function(){
        date2.setSeconds(date2.getSeconds()+1);
        Timer.innerHTML ='Время игры: ' + Plus0(date2.getMinutes()) +" min "+ ': ' + Plus0(date2.getSeconds())+"sec";

    }, 1000);
    function Plus0(n){

        if (n<10){
            return '0'+n;
        } else {
            return ''+n;
        }
    }
}

function Proverka(){

    if (RndNumb<Number(PlayerNumber.value)){
        Cong.textContent = 'Загаданное число МЕНЬШЕ, попробуйте еще раз!'
    }
    if (RndNumb>Number(PlayerNumber.value)){
        Cong.textContent = 'Загаданное число БОЛЬШЕ, попробуйте еще раз!'
    }
    if (RndNumb===Number(PlayerNumber.value)){
        Cong.textContent = 'Вы победили!'
        clearInterval(gameTimerId)
    }
}



let Result = document.querySelector('#Result')

Result.addEventListener('click',()=>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    Table.append(tr);
    tr.append(td);
    td.textContent = 'Имя игрока: ' + userName.value + '   '+ Timer.textContent + Attempts.textContent
    // for (let i = 0; i < trs; i++)
    // {
    //     let tr = document.createElement('tr');
    //     Table.append(tr);
    //     for (let j = 0; j < tds; j++)
    //     {
    //         let td = document.createElement('td');
    //         tr.append(td);
    //         td.textContent = '1';
    //     }
    // }
    GameField.style.display = 'none'
    Table.style.display =  'block'


})




