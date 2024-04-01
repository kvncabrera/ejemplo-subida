let arrayImagenes = ['media/hombres_guitarra.jpg','media/anuncio1.jpg','media/anuncio3.jpg','media/blog1.jpg'];

let numero = 0;

let estadoIntervalo = true;


let imagen = document.getElementById('imagen');

function handlerEvents() {

    let atras = document.getElementById('atras');
    let delante = document.getElementById('delante');
    let parar = document.getElementById('stop');
    let botonesSeccion = document.getElementsByClassName('botonCirculo');


    parar.addEventListener('click',pararIntervalo)
    delante.addEventListener('click',imagenDelante);
    atras.addEventListener('click', imagenAtras);

    for (let i = 0; i < botonesSeccion.length; i++) {
        
        botonesSeccion[i].addEventListener('click',saltaImagen);

    }

}

function saltaImagen(e) {
    let textoBoton = parseInt( e.target.innerHTML);

    numero = textoBoton - 1;
    pintaBotones()
    imagen.src = arrayImagenes[numero];
}


function pararIntervalo() {

    if (estadoIntervalo == true) {
        estadoIntervalo = false;
        clearInterval(intervalo);
    }else{
        estadoIntervalo = true;
        intervalo = setInterval(imagenDelante,1000);
    }

}

function imagenAtras() {
    numero--;
    if (numero < 0) {
        numero = arrayImagenes.length - 1;
    }
    pintaBotones();
    imagen.src = arrayImagenes[numero];
}

function pintaBotones(){

    let botonesSeccion = document.getElementsByClassName('botonCirculo');
    for (let i = 0; i < botonesSeccion.length; i++) {
       
        botonesSeccion[i].classList.remove('botonCirculoActivo');
        
    }

    botonesSeccion[numero].classList.add('botonCirculoActivo');
}


function imagenDelante() {

    numero++;
    if (numero == arrayImagenes.length) {
        numero = 0;
    }
    pintaBotones()
    imagen.src = arrayImagenes[numero];
}


let intervalo = setInterval(imagenDelante,1000);

window.onload = handlerEvents;