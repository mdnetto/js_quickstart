window.onload = initAll;

function initAll() {
  document.getElementById('redirect').onclick = initRedirect;
}

function initRedirect() {
  alert('We are not responsible for the content of pages outside our site');
  console.log(window.location);
  debugger;
  console.log(this);
  debugger;
  window.location = this;
  return false;
}

