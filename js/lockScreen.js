const unlock = () => {
  const lock = document.getElementById("lockScreen");
  const home = document.getElementById("homescreen");

  // Animación de desbloqueo
  lock.style.animation = "slideUpLock 0.45s ease forwards";

  setTimeout(() => {
    lock.classList.add("hidden");
    home.classList.remove("hidden");

    // Rebotar íconos
    document.querySelectorAll("#homescreen .app-icon").forEach(icon => {
      icon.classList.add("bouncing-icon");
      setTimeout(() => {
        icon.classList.remove("bouncing-icon");
      }, 500);
    });

    lock.style.animation = ""; // limpia animación
  }, 400);
};

document.getElementById("fingerprint").addEventListener("touchend", unlock);
document.getElementById("fingerprint").addEventListener("mouseup", unlock);