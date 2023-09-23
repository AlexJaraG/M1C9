let inputTitulo = document.getElementById('inputTitulo');
let inputEstreno = document.getElementById('inputEstreno');
let inputGenero = document.getElementById('inputGenero');
let inputImagen = document.getElementById('inputImagen');
let inputSinopsis = document.getElementById('inputSinopsis');

const btnAgregar = document.getElementById('btnAgregar');
const btnBorrarTodo = document.getElementById('btnBorrarTodo');

const divPeliculas = document.getElementById('divPeliculas');
const alertSinPeliculas = document.getElementById('alertSinPeliculas');

function guardarPelicula(){
    let titulo = inputTitulo.value;
    let estreno = inputEstreno.value;

    console.log("titulo: ", titulo);
    console.log("estreno: ", estreno);
   
};

function borrarTodo(){
    console.log("esto borra todo");
};

class Pelicula{
    constructor(titulo, estreno, genero, imagen,sinopsis){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
    }
}

btnAgregar.addEventListener('click', guardarPelicula);
btnBorrarTodo.addEventListener('click', borrarTodo)