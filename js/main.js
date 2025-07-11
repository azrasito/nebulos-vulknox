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


function setThemeColor(rgba) {
  document.documentElement.style.setProperty("--theme-color", rgba);
  localStorage.setItem("theme-color", rgba);
}

// Y luego:
function ObsidianMist() { setThemeColor("rgba(70, 21, 50, 0.65)"); }
function CristalFog()   { setThemeColor("rgba(100, 100, 100, 0.65)"); }
function TransLava()    { setThemeColor("rgba(80, 21, 14, 0.65)"); }
function paleGreen()    { setThemeColor("rgba(10, 55, 20, 0.65)"); }
function bluevalley()   { setThemeColor("rgba(10, 21, 40, 0.65)"); }

function lock() {
  document.getElementById("lockScreen").classList.remove("hidden")
  document.getElementById("homescreen").classList.add("hidden")
  document.getElementById("lockScreen").classList.remove("unused")
}

var timerOn = null
function showPeninsula(message, duration, width, height) {
  const peninsula = document.getElementById("peninsula");
  clearTimeout(timerOn)
  peninsula.textContent = message;
  peninsula.style.width = `${width}px`;
  peninsula.style.height = `${height}px`;
  peninsula.style.color = `white`
  peninsula.style.padding = '0 10px';

  timerOn = setTimeout(() => {
    peninsula.style.width = "0px";
    peninsula.style.height = "24px";
    peninsula.style.padding = "0";
    //peninsula.style.color = `black`
    peninsula.textContent = "";
  }, duration);
}