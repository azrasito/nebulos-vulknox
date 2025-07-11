const uploader = document.getElementById("uploader");
const screen = document.getElementById("screen");

function setBackground(url) {
  screen.style.backgroundImage = `url(${url})`;
  localStorage.setItem("fondo", url);
}

window.addEventListener("load", () => {
  const fondoGuardado = localStorage.getItem("fondo");
  if (fondoGuardado) setBackground(fondoGuardado);
});

function changeto(elemento) {
  const url = elemento.src;
  setBackground(url);
  uploader.value = ""; // Para poder volver a subir la misma imagen si quieres
}

uploader.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const dataURL = e.target.result;
    setBackground(dataURL);
  };
  reader.readAsDataURL(file);
});