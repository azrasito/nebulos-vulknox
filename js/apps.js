function openSettings() {
  document.getElementById("settingsApp").classList.add("shown");
  //showPeninsula("Opened settings", 1500)
}
function openPersonalization() {
  document.getElementById("personalization").classList.add("shown")
}
function openFiles() {
  
}
function openClock() {
  document.getElementById("clockApp").classList.add("shown")
}
function openCalc() {
  document.getElementById("calculator").classList.add("shown");
}
function openThemes() {
  document.getElementById("themes").classList.add("shown");
}


let startX = 0;
const persona = document.getElementById('personalization');
const calcu = document.getElementById('calculator');
const settingsApp = document.getElementById('settingsApp');
const clockApp = document.getElementById("clockApp");
const themes = document.getElementById("themes")

settingsApp.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
settingsApp.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    settingsApp.classList.remove('shown');
  }
});
settingsApp.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
settingsApp.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    settingsApp.classList.remove('shown');
  }
});
persona.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
persona.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    persona.classList.remove('shown');
  }
});
persona.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
persona.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    persona.classList.remove('shown');
  }
});
calcu.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
calcu.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    calcu.classList.remove('shown');
    document.getElementById("calcScreen").value = ""
  }
});
calcu.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
calcu.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    calcu.classList.remove('shown');
    document.getElementById("calcScreen").value = ""
  }
});
clockApp.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
clockApp.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    clockApp.classList.remove('shown');
  }
});
clockApp.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
clockApp.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    clockApp.classList.remove('shown');
  }
});
themes.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
themes.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    themes.classList.remove('shown');
  }
});
themes.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
themes.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    themes.classList.remove('shown');
  }
});
