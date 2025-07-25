function lock() {
  document.getElementById("lockScreen").classList.remove("hidden")
  document.getElementById("homescreen").classList.add("hidden")
  document.getElementById("lockScreen").classList.remove("unused")
  document.querySelector(".app-icon").classList.add("hidden")
  
  
  const offscreen = document.getElementById("offscreen");

  if (getComputedStyle(offscreen).display !== "none") {
    // Apagando
    offscreen.classList.add("off-transition");
    setTimeout(() => {
      offscreen.style.display = "none";
    }, 300); // mismo tiempo que la transición
  } else {
    // Encendiendo
    offscreen.style.display = "flex";
    
    // Esperar un tick para aplicar animación
    setTimeout(() => {
      offscreen.classList.remove("off-transition");
    }, 10); // 10ms es suficiente para que el navegador actualice el estilo
  }
}

const unlock = () => {
  const lock = document.getElementById("lockScreen");
  const home = document.getElementById("homescreen");

  // Animación de desbloqueo
  lock.style.animation = "slideUpLock 0.525s ease forwards";

  setTimeout(() => {
    lock.classList.add("hidden");
    home.classList.remove("hidden");

    // Rebotar íconos
    /*document.querySelectorAll("#homescreen .app-icon").forEach(icon => {
      icon.classList.add("bouncing-icon");
      setTimeout(() => {
        icon.classList.remove("bouncing-icon");
      }, 500);
    });*/
    
    document.querySelector(".app-icon").classList.remove("hidden")

    lock.style.animation = ""; // limpia animación
  }, 400);
};

document.getElementById("fingerprint").addEventListener("touchend", unlock);
document.getElementById("fingerprint").addEventListener("mouseup", unlock);