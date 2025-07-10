let display = document.getElementById("calcScreen")
let displayPhone = document.getElementById("phoneScreen")
function append(element) {
 display.value += element
}
function appendPhone(param) {
  displayPhone.value += param
}
function calcc() {
 try {
  display.value = eval(display.value)
 } catch {
  display.value = "Err"
 }
}
function diall() {
  displayPhone.value = 0
}
function delLast() {
 display.value = display.value.slice(0, -1)
}
function delLastPhone() {
  displayPhone.value = displayPhone.value.slice(0, -1)
}
function erase() {
 display.value = ""
}
function erasePhone() {
 displayPhone.value = ""
}
function switchMinus() {
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1) // Quita el signo negativo
  } else if (display.value !== '') {
    display.value = `-${display.value}`    // Agrega el signo negativo
  }
}

if (displayPhone.value === '*#0*#') {
  window.location.href = 'index.html'
}