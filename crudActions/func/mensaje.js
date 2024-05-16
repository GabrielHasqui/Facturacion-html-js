var texto = "Bienvenido al menu de navegacion tienda unemi";
var indice = 0;
var elemento = document.getElementById('welcome-message');
function escribir() {
    if (indice < texto.length) {
        elemento.innerHTML += texto[indice];
        indice++;
        setTimeout(escribir, 100); 
    }
}
escribir();