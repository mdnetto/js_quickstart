window.onload = initAll;

function initAll() {
  var ans = prompt('Enter a number');
  try {
    if (!ans || isNaN(ans) || ans<0) {
      throw new Error('That\'s not a valid number');
    }
    alert('the square root of ' + ans + ' is ' + Math.sqrt(ans));
  } catch (errMsg) {
    alert(errMsg.message);
  }
}
