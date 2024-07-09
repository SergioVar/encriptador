// Función para encriptar el texto ingresado
function encriptar() {
    let texto = document.getElementById("texto").value; // Obtener el texto del área de texto
    let tituloMensaje = document.getElementById("titulo-mensaje"); // Obtener el elemento del título del mensaje
    let parrafo = document.getElementById("parrafo"); // Obtener el elemento del párrafo
    let img1 = document.getElementById("img1"); // Obtener el elemento de la imagen
    

    // Reemplazar las vocales con los valores de encriptación
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) { // Si el texto no está vacío
      document.getElementById("texto").value = textoCifrado; // Mostrar el texto encriptado
      tituloMensaje.textContent = "Texto encriptado con éxito"; // Cambiar el título del mensaje
      parrafo.textContent = ""; // Limpiar el párrafo
      img1.src = "./img/exitoso.jpg"; // Cambiar la imagen
    } else {
      img1.src = "./img/encriptar.png"; // Cambiar la imagen a una por defecto
      tituloMensaje.textContent = "Ningún mensaje fue encontrado"; // Cambiar el título del mensaje
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; // Cambiar el párrafo
      Swal.fire("Error!", "Debes ingresar un texto para convertir", "warning");
    }
}

// Función para desencriptar el texto ingresado
function desencriptar() {
    let texto = document.getElementById("texto").value; // Obtener el texto del área de texto
    let tituloMensaje = document.getElementById("titulo-mensaje"); // Obtener el elemento del título del mensaje
    let parrafo = document.getElementById("parrafo"); // Obtener el elemento del párrafo
    let img1 = document.getElementById("img1"); // Obtener el elemento de la imagen

    // Reemplazar los valores de encriptación con las vocales originales
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    if (texto.length != 0) { // Si el texto no está vacío
        document.getElementById("texto").value = textoCifrado; // Mostrar el texto desencriptado
        tituloMensaje.textContent = "Texto desencriptado con éxito"; // Cambiar el título del mensaje
        parrafo.textContent = ""; // Limpiar el párrafo
        img1.src = "./img/desencriptado.jpg"; // Cambiar la imagen
    } else {
        img1.src = "./img/encriptar.png"; // Cambiar la imagen a una por defecto
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"; // Cambiar el título del mensaje
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; // Cambiar el párrafo
        Swal.fire("Error!", "Debes ingresar un texto para convertir", "warning");
    }
}



function reiniciar() {
    location.reload();
}
