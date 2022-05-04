var boardArray = [
    4,1,0,0,6,0,0,7,8,
    7,0,3,5,0,1,4,2,0,
    0,0,8,4,7,3,0,6,0,
    0,5,0,0,9,4,8,3,0,
    3,9,0,0,1,0,7,0,0,
    2,8,4,3,0,0,0,0,0,
    6,0,0,0,0,0,0,8,0,
    0,0,1,9,4,0,0,0,0,
    0,4,9,0,2,8,0,0,0
];

var boardAnswer = [
  4,1,5,2,6,9,3,7,8,
  7,6,3,5,8,1,4,2,9,
  9,2,8,4,7,3,5,6,1,
  1,5,7,6,9,4,8,3,2,
  3,9,6,8,1,2,7,4,5,
  2,8,4,3,5,7,1,9,6,
  6,7,2,1,3,5,9,8,4,
  8,3,1,9,4,6,2,5,7,
  5,4,9,7,2,8,6,1,3
];

const container = document.getElementById("container");


makeRows(9, 9);

setInterval(popUp, 300)

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (boardArray[c]);
    container.appendChild(cell).className = "grid-item";
  };
};

function popUp(){
  var random = Math.floor(Math.random() * $('.distraction').length);
  $('.distraction').hide().eq(random).show();
  if (random == 1){
    distraction1()
  }
}

function distraction1(){
  
}