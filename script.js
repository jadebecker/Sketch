let container = document.querySelector('#container');

// creation grille
function createGrid(){
let i = 0;
  container.setAttribute('style','width:352px;height:320px;');
  while(i < (16*16)){
    let div = document.createElement('div');
    div.setAttribute('style','width:20px;height:20px;');
    div.style.backgroundColor = "white";
    div.setAttribute('class','bord');
    container.appendChild(div);
    i++;
  }
}

createGrid();

// colorie en noir
document.querySelector('div').addEventListener('click', () => {
  event.target.style.backgroundColor = "black";
});

// clear
document.querySelector('button').onclick = function () {
  let div = document.querySelectorAll('div');
  div.forEach(square => {
    square.style.backgroundColor = "white";})
};
