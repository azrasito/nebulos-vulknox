const display = document.getElementById("calcScreen");
const displayPhone = document.getElementById("phoneScreen");

function append(char) {
  display.value += char;
}

function appendPhone(char) {
  displayPhone.value += char;
  if (displayPhone.value === '*#0*#') {
    window.location.href = 'index.html';
  }
}

function calcc() {
  try {
    const safeExpression = display.value.replace(/[^0-9\+\-\*\/\.\(\)]/g, '');
    display.value = eval(safeExpression);
  } catch {
    display.value = "Err";
  }
}

function diall() {
  displayPhone.value = "0";
}

function delLast() {
  display.value = display.value.slice(0, -1);
}

function delLastPhone() {
  displayPhone.value = displayPhone.value.slice(0, -1);
}

function erase() {
  display.value = "";
}

function erasePhone() {
  displayPhone.value = "";
}

function switchMinus() {
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1);
  } else if (display.value !== '') {
    display.value = `-${display.value}`;
  }
}