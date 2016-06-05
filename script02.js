window.onload = writeMessage;

// Do this when the page finishes loading
function writeMessage(){
  // Here's where the acutal work gets done
  document.getElementById('helloMessage').innerHTML = "Hello, World!";
}
