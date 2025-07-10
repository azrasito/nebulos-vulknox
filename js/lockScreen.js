document.getElementById("fingerprint").addEventListener("touchend", () => {
  document.getElementById("lockScreen").classList.add("hidden")
  document.getElementById("homescreen").classList.remove("hidden")
  //document.getElementById("fingerprint").style.opacity = 0.1
})
document.getElementById("fingerprint").addEventListener("mouseup", () => {
  document.getElementById("lockScreen").classList.add("hidden")
  document.getElementById("homescreen").classList.remove("hidden")
  //document.getElementById("fingerprint").style.opacity = 0.1
})