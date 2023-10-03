var secuencia = []; // La secuencia generada por la computadora
var secuenciaUsuario = []; // La secuencia ingresada por el usuario
var nivel = 1; // El nivel actual del juego



function iniciarJuego() {
    document.getElementsByTagName('button')[0].style.display = 'none'; // Oculta el botón "Iniciar Juego"
    document.getElementById('informacion-juego').style.display = 'none'; // Oculta el overlay

    var cuadrados = document.getElementsByClassName('square');
    for (var i = 0; i < cuadrados.length; i++) {
        cuadrados[i].addEventListener('click', handleClick);
        cuadrados[i].addEventListener('mouseover', handleMouseOver);
        cuadrados[i].addEventListener('mouseout', handleMouseOut);
    }
    siguienteNivel(); // Genera la primera secuencia
}

function handleMouseOver(evento) {
    var cuadrado = evento.target;
    cuadrado.style.backgroundColor = 'orange';
}

function handleMouseOut(evento) {
    var cuadrado = evento.target;
    cuadrado.style.backgroundColor = 'white';
}

function siguienteNivel() {
    generarSecuencia();
    mostrarSecuencia();
    document.getElementById("nivel").innerHTML = "Nivel: " + nivel;
    nivel++;
}
  
function generarSecuencia() {
    secuencia = [];
    for (var i = 0; i < nivel; i++) {
        secuencia.push(Math.floor(Math.random() * 9) + 1); // Genera un número aleatorio entre 1 y 9 y lo agrega a la secuencia
    }
}

function mostrarSecuencia() {
    var i = 0;
    var intervalo = setInterval(function () {
        if (i >= secuencia.length) {
            clearInterval(intervalo); // Detiene la animación
            return;
        }
        var cuadrado = document.getElementById(secuencia[i]);
        cuadrado.style.backgroundColor = 'blue';
        setTimeout(function () {
            cuadrado.style.backgroundColor = 'white';
        }, 500);
        i++;
    }, 1000);
}

function handleClick(evento) {
    var cuadrado = evento.target;
    cuadrado.style.backgroundColor = 'blue';
    setTimeout(function () {
        cuadrado.style.backgroundColor = 'white';
    }, 500);
    secuenciaUsuario.push(Number(cuadrado.id));
    if (secuenciaUsuario.length === secuencia.length) {
        chequearSecuencia();
    }
}

function chequearSecuencia() {
    for (var i = 0; i < secuencia.length; i++) {
        if (secuencia[i] !== secuenciaUsuario[i]) {
            alert('¡Perdiste! Tu puntaje es: ' + nivel);
            reiniciarJuego();
            return;
        }
    }
    alert('¡Correcto! Siguiente nivel.');
    secuenciaUsuario = [];
    nivel++;
    siguienteNivel();
}

function reiniciarJuego() {
    nivel = 1;
    secuenciaUsuario = [];
    document.getElementsByTagName('button')[0].style.display = 'block'; // Muestra el botón "Iniciar Juego"
    document.getElementById('1').removeEventListener('click', handleClick);
    document.getElementById('2').removeEventListener('click', handleClick);
    document.getElementById('3').removeEventListener('click', handleClick);
    document.getElementById('4').removeEventListener('click', handleClick);
    document.getElementById('5').removeEventListener('click', handleClick);
    document.getElementById('6').removeEventListener('click', handleClick);
    document.getElementById('7').removeEventListener('click', handleClick);
    document.getElementById('8').removeEventListener('click', handleClick);
    document.getElementById('9').removeEventListener('click', handleClick);
    document.getElementById('1').style.backgroundColor = 'white';
    document.getElementById('2').style.backgroundColor = 'white';
    document.getElementById('3').style.backgroundColor = 'white';
    document.getElementById('4').style.backgroundColor = 'white';
    document.getElementById('5').style.backgroundColor = 'white';
    document.getElementById('6').style.backgroundColor = 'white';
    document.getElementById('7').style.backgroundColor = 'white';
    document.getElementById('8').style.backgroundColor = 'white';
    document.getElementById('9').style.backgroundColor = 'white';

}

