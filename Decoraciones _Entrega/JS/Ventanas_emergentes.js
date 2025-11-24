function mostrarPopup() {
  document.getElementById("overlay").style.visibility = "visible";
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("popup").style.display = "block";
}

function cerrarPopup() {
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("overlay").style.opacity = "0";
  document.getElementById("popup").style.display = "none";
}

window.onload = mostrarPopup; // Muestra al cargar la pagina web
