function openApp(appInternalName) {
  document.getElementById(appInternalName).classList.add("shown")
  document.getElementById(appInternalName).style.animation = "opening"
    setTimeout(() => {
      document.getElementById(appInternalName).style.animation = ""
    }, 160)
}


let startX = 0;
const persona = document.getElementById('personalization');
const calcu = document.getElementById('calculator');
const settingsApp = document.getElementById('settingsApp');
const clockApp = document.getElementById("clockApp");
const themes = document.getElementById("themes")
const sysInfo = document.getElementById("sysinfo")
const galeria = document.getElementById("galeria")
const phone = document.getElementById("phone")


settingsApp.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
settingsApp.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    settingsApp.classList.remove('shown');
    settingsApp.style.animation = "opening"
    setTimeout(() => {
      settingsApp.style.animation = ""
    }, 160)
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

sysInfo.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
sysInfo.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    sysInfo.classList.remove('shown');
  }
});
sysInfo.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
sysInfo.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    sysInfo.classList.remove('shown');
  }
});

galeria.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
galeria.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    galeria.classList.remove('shown');
  }
});
galeria.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
galeria.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    galeria.classList.remove('shown');
  }
});

phone.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
phone.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    phone.classList.remove('shown');
  }
});
phone.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});
phone.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (endX - startX > 100) {
    phone.classList.remove('shown');
  }
});