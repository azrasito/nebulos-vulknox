let display = document.getElementById("calcScreen")
function append(element) {
 display.value += element
}
function calcc() {
 try {
  display.value = eval(display.value)
 } catch {
  display.value = "Err"
 }
}
function delLast() {
 display.value = display.value.slice(0, -1)
}
function erase() {
 display.value = ""
}
function switchMinus() {
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1) // Quita el signo negativo
  } else if (display.value !== '') {
    display.value = `-${display.value}`    // Agrega el signo negativo
  }
}