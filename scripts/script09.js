window.onload = initAll;

function initAll() {
  document.getElementById('lincoln').onclick = saySomething;
  document.getElementById('kennedy').onclick = saySomething;
  document.getElementById('nixon').onclick = saySomething;
}


function saySomething() {
  switch(this.id) {
    case 'lincoln':
      alert('Four scores and seven years ago');
      break;
    case 'kennedy':
      alert('Ask not what your country can do for you...');
      break;
    case 'nixon':
      alert('I am not a crook!');
      break;
    default:
  }
}
