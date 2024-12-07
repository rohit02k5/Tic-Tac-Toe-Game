let turno=true;
let btns=document.querySelectorAll(".btn");    
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".hehe");
let reset=document.querySelector(".reset");
let count=0;

const winCondn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const enableBoxes=()=>{
    for(let btn of btns){
        btn.innerText="";
     btn.disabled=false; 
    }
    msg.classList.add("hide");
}

const Reset=()=>{
    turno=true;
    enableBoxes();
    count=0;
}

reset.addEventListener("click",Reset);
newbtn.addEventListener("click",Reset);
const disableBoxes=()=>{
    for( let btn of btns){
        btn.disabled=true;
    }
};


if(count==9 && checker==false){
    drawcheck;
}

const drawcheck=()=>{
    if(count==9){
    msg.innerText=`It is a Draw.Wanna Play Again?`;
    msg.classList.remove("hide");
    disableBoxes();
    count=0;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    count=0;
    msg.classList.remove("hide");
    disableBoxes();
}


btns.forEach((btn)=> {
    btn.addEventListener("click",()=>{
        if(turno){
            btn.innerText="O";
            turno=false;
        }
        else{
            btn.innerText="X";
            turno=true;
        }
        count++;
        drawcheck();
        btn.disabled=true;
        checker();
    })
});

const checker=()=>{
for(let patterns of winCondn){
    if(btns[patterns[0]].innerText!="" && btns[patterns[1]].innerText!="" && btns[patterns[2]].innerText!=""){
    if(btns[patterns[0]].innerText==btns[patterns[1]].innerText && btns[patterns[1]].innerText==btns[patterns[2]].innerText){
        showWinner(btns[patterns[0]].innerText);
        return true;
}
    }
    else continue;
}
return false;
}