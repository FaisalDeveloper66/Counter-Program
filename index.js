// COUNTERPROGRAM

const decreaseBtn = document.getElementById("btnDecrease");
const resetBtn = document.getElementById("btnReset");
const increaseBtn = document.getElementById("btnIncrease");
const countLable = document.getElementById("countLable");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countLable.textContent = count;
}