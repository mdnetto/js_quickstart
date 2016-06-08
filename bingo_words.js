window.onload = initAll;
var buzzwords = new Array (" Aggregate", "Ajax", "API", "Bandwidth", "Beta", "Bleeding edge", "Convergence", "Design pattern", "Disruptive", "DRM", "Enterprise", "Facilitate", "Folksonomy", "Framework", "Impact", "Innovate", "Long tail", "Mashup", "Microformats", "Mobile", "Monetize", "Open social",<F24><F25>"Paradigm", "Podcast", "Proactive", "Rails", "Scalable", "Social bookmarks", "Social graph", "Social software", "Spam", "Synergy", "Tagging", "Tipping point", "Truthiness", "User-generated", "Vlog", "Webinar", "Wiki", "Workflow" );
var usedWords = new Array(buzzwords.length);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  } else {
    alert("Sorry your browser does not support this script");
  }
}

function newCard() {
    for(var i=0; i<24; i++) {
      setSquare(i);
    }
}

function setSquare(thisSquare) {
  do {
    var randomWord = Math.floor(Math.random() * buzzwords.length);
  } while (usedWords[randomWords]);
  
  


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

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
  document.getElementById(currentSquare).className = "";
  document.getElementById(currentSquare).onmousedown = toggleColor;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i=1; i<usedNums.length; i++) {
    usedNums[i] = false;
  }
  newCard();
  return false;
}

function toggleColor(evt) {
  if (evt) {
    var thisSquare = evt.target;
  } else {
    //for IE, because it sucks
    var thisSquare = window.event.srcElement;
  }
  if (thisSquare.className == '') {
   thisSquare.className = 'pickedBG';
  } else {
    thisSquare.className = '';
  }
  checkWin();
}

function checkWin() {
  var winningOption = -1;
  var setSquares = 0;
  var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

  for (var i=0; i<24; i++) {
    var currentSquare = "square" + i;
    if (document.getElementById( currentSquare).className != "") {
      document.getElementById( currentSquare).className = "pickedBG";
      setSquares = setSquares | Math.pow( 2, i);
    }
  }

  for (var i = 0; i < winners.length; i++) {
    if (( winners[i] & setSquares) == winners[i]) {
      winningOption = i;
    }
  }

  if (winningOption > -1) {
    for (var i = 0; i < 24; i++) {
      if (winners[winningOption] & Math.pow(2, i)) {
        currentSquare = "square" + i;
        document.getElementById(currentSquare).className = "winningBG";
      }
    }
  }
}
