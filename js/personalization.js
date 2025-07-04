// Fondo: desde input o imagen
const uploader = document.getElementById("uploader");

const fondoGuardado = localStorage.getItem("fondo");
if (fondoGuardado) {
  // importante: asegúrate de que esta línea se ejecute después de que todo cargue
  window.addEventListener("load", () => {
    document.getElementById("screen").style.backgroundImage = `url(${fondoGuardado})`;
    //document.body.style.backgroundImage = `url(${fondoGuardado})`
  });
}

function changeto(elemento) {
  const url = elemento.src;
  document.getElementById("screen").style.backgroundImage = `url(${url})`;
  //document.body.style.backgroundImage = `url(${url})`
  localStorage.setItem("fondo", url);
  //uploader.value = ""; // Permitir subir el mismo archivo de nuevo
}

uploader.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const dataURL = e.target.result;
    document.getElementById("screen").style.backgroundImage = `url(${dataURL})`;
    //document.body.style.backgroundImage = `url(${dataURL})`
    localStorage.setItem("fondo", dataURL);
  };
  reader.readAsDataURL(file);
});