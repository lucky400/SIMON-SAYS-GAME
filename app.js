let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","green","yellow","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game has started")
        started  = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);
};

function usrflash(btn) {
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash");
    }, 250);
};



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randBtn);
};

function checkans(idx){
    // console.log(`level : ${level}`);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score was <b> ${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } ,200);
        reset();
    }
}


function btnpress(){
    console.log(this);
    let btn = this;
    usrflash(btn);

    let usrcolor = btn.getAttribute("id");
    userSeq.push(usrcolor);
    console.log(userSeq);

    checkans(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}