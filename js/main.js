console.log("Web loaded!")
console.warn("This is a Dev Beta, errors may occur")
console.warn("Do NOT distribute")


const savedThemeColor = localStorage.getItem("theme-color");
if (savedThemeColor) {
  document.documentElement.style.setProperty("--theme-color", savedThemeColor);
}
document.getElementById("homescreen").classList.add("hidden")


// Battery Indicator Logic
navigator.getBattery().then(battery => {
  const batteryLevel = document.getElementById('battery-level');
  const batteryText = document.getElementById('battery-text');

  function updateBatteryStatus() {
    const level = Math.floor(battery.level * 100);
    batteryLevel.style.width = `${level}%`;
    batteryText.textContent = `${level}%${battery.charging ? '⚡' : ''}`;
  }

  updateBatteryStatus();

  battery.addEventListener('levelchange', updateBatteryStatus);
  battery.addEventListener('chargingchange', updateBatteryStatus);
});


function ObsidianMist() {
  const color = "rgba(70, 21, 50, 0.65)";
  document.documentElement.style.setProperty("--theme-color", color);
  localStorage.setItem("theme-color", color);
}
function CristalFog() {
  const color = "rgba(100, 100, 100, 0.65)";
  document.documentElement.style.setProperty("--theme-color", color);
  localStorage.setItem("theme-color", color);
}
function TransLava() {
  const color = "rgba(80, 21, 14, 0.65)";
  document.documentElement.style.setProperty("--theme-color", color);
  localStorage.setItem("theme-color", color);
}
function paleGreen() {
  const color = "rgba(10, 55, 20, 0.65)";
  document.documentElement.style.setProperty("--theme-color", color);
  localStorage.setItem("theme-color", color);
}
function bluevalley() {
  const color = "rgba(10, 21, 40, 0.65)";
  document.documentElement.style.setProperty("--theme-color", color);
  localStorage.setItem("theme-color", color);
}

let holdTimer;
  document.getElementById("fingerprint").addEventListener("mousedown", () => {
    holdTimer = setTimeout(() => {
      document.getElementById("lockScreen").classList.add("hidden")
      localStorage.setItem("locked", "false")
      document.getElementById("homescreen").classList.remove("hidden")
    }, 300);
  });

  document.getElementById("fingerprint").addEventListener("mouseup", () => {
    clearTimeout(holdTimer);
    document.getElementById("fingadv").textContent = "Fingerprint not read"
    document.getElementById("fingadv").style.animation = "shake 0.4s ease";
    setTimeout(() => {
      document.getElementById("fingadv").textContent = ""
      document.getElementById("fingadv").style.animation = "";
    }, 2000)
  });
  document.getElementById("fingerprint").addEventListener("touchstart", () => {
    holdTimer = setTimeout(() => {
      console.log("¡Acción activada por mantener presionado (touch)!");
      document.getElementById("lockScreen").classList.add("hidden")
      document.getElementById("homescreen").classList.remove("hidden")
    }, 300);
  });

  document.getElementById("fingerprint").addEventListener("touchend", () => {
    clearTimeout(holdTimer);
    document.getElementById("fingadv").textContent = "Fingerprint not read"
    document.getElementById("fingadv").style.animation = "shake 0.4s ease";
    setTimeout(() => {
      document.getElementById("fingadv").style.animation = "";
    }, 150)
    setTimeout(() => {
      document.getElementById("fingadv").textContent = ""
      document.getElementById("fingadv").style.animation = "";
    }, 2000)
  });
  
function lock() {
  document.getElementById("lockScreen").classList.remove("hidden")
  document.getElementById("homescreen").classList.add("hidden")
  document.getElementById("lockScreen").classList.remove("unused")
}

function showPeninsula(message, duration, width, height, paddingX, paddingY) {
  const peninsula = document.getElementById("peninsula");
  peninsula.textContent = message;
  peninsula.style.width = `${width}px`;
  peninsula.style.height = `${height}px`;
  //peninsula.style.borderRadius = `0 0 ${borRad} ${borRad}`;
  peninsula.style.padding = `${paddingX}px ${paddingY}px`;

  setTimeout(() => {
    peninsula.style.width = "0px";
    peninsula.style.height = "24px";
    peninsula.style.padding = "0";
    //peninsula.style.borderRadius = "0px";
    peninsula.textContent = "";
  }, duration);
}