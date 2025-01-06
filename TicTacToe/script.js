let boxes = document.querySelectorAll('.box');
let win = document.querySelector('.win');

let turn = 1;

let winningCombination = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    let addClass = turn?'x':'o';
    box.classList.add(addClass);
    if(checkWinner(addClass)){
      win.style.cssText = `opacity: 1; z-index:999;
      transform: translateY(0%)`;
    }
    else if(draw()){
      console.log("Draw");
    }
    turn = !turn;
  },{once:true});
})

function checkWinner(currentClass){
  return winningCombination.some((a)=>{
    return a.every((i)=>{
      return boxes[i-1].classList.contains(currentClass);
    })
  })
}



function draw(){
 
  return [...boxes].every((box)=>{
    return box.classList.contains('x') || box.classList.contains('o');
  })
}


win.children[1].addEventListener('click',()=>{
  window.location.reload();
})