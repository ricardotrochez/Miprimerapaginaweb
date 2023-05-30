// Encuentra al elemento HTLM (el boton) mediante si ID
const miBoton = document.getElementById('miBoton');

// Define la funcion que se ejecutara cuando se haga click en el boton
function handleClick() {
    alert(' ¡Hola! Has hecho click en el boton.');
}

miBoton.addEventListener ('click', handleClick);