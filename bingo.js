window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    for(var i=0; i<24; i++) {
      setSquare(i);
    }
  } else {
    alert("Sorry your browser does not support this script");
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;

  //each column has a different range of numbers
  var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;
  var newNum;

  do {
    newNum = colBasis + getNewNum() + 1;
  }
  while (usedNums[newNum]);
  //if (!usedNums[newNum]) {
    usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
  //}
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}
