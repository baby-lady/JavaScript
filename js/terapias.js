// const nombre= prompt("ingrese su nombre completo");
// const apellido=prompt("ingrese su apellido");
// const edad=parseInt(prompt("ingrese su edad"));
// const ocupacion=prompt("ingrese su ocupacion")

// function persona(nombre, apellido, edad, ocupacion){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.ocupacion = ocupacion;
// }

// const usuario1 = new persona();
// console.log (usuario1)

// let tiposTerapias = ["astrología", "reiki", "constelaciones familiares", "tarot", "radiestesia", "numerologia", "registros akashicos", "terapias florales"]
// const terapiasYprecios =[
//     {nombre:"Astrología", precio:10000},
//     {nombre:"Reiki", precio:5000},
//     {nombre:"Constelaciones Familiares", precio:12000},
//     {nombre:"Tarot", precio:5000},
//     {nombre:"Radiestesia", precio:8000},
//     {nombre:"Numerología", precio:6000},
//     {nombre:"Registros Akashicos", precio:6000},
//     {nombre:"Terapia floral", precio:6000}
// ]

// console.log (tiposTerapias)
// terapiasYprecios.forEach((terapia)=>{
//     console.log(terapia.nombre)
// })





// let nombreUsuario
// let edadUsuario

// function bienvenida(){
//     edadUsuario = parseInt(prompt("ingrese su edad"));
//     if (edadUsuario >= 18){
//         alert("Bienvenidx!");
//     } else {
//         alert("Usted no tiene permitido el acceso");
//     }
// }

function bienvenida(){
    edadUsuario = parseInt(prompt("Ingrese su edad"));
    edadUsuario > 18 ? alert("¡Bienvenido!") : alert("Debés ser mayor para continuar.");
    if (edadUsuario >= 18){
        window.location.href = "compras.html";
    } else {
        alert("Usted no tiene permitido el acceso");
    }
}

// bienvenida();
// console.log("Nombre: "+ nombreUsuario + ". Edad: " + edadUsuario)

const terapia = function(nombre, precio, tipo, extra, precioad){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.extra = extra;
    this.precioad = precioad;
}

// variables de objetos
let astrologia = new terapia ("Astrología", 10000, "Carta Natal", "Revolución Solar", 3000)
let reiki = new terapia ("Reiki", 5000, "Individual")
let constelaciones = new terapia ("Constelaciones Familiares", 12000, "Grupal")
let constelaciones2 = new terapia ("Constelacion Individual", 15000, "Individual")
let tarot = new terapia ("Tarot", 5000, "Tirada completa", "Tres preguntas", 2000)
let radiestesia = new terapia ("Radiestesia", 8000, "Limpieza", "Armonización", 3000)
let numerologia = new terapia ("Numerología", 6000, "Lectura clasica", "Anual por cumpleaños", 4000)
let registros = new terapia ("Registros Akashicos", 6000, "Tres preguntas", "Tres preguntas más", 3000)
let tFloral = new terapia ("Terapia Floral de Bach", 7000, "Sesión + frasco", "Frasco grande", 1500)

//array terapias

const Terapias = [astrologia, reiki, constelaciones, constelaciones2, tarot, radiestesia, numerologia, registros, tFloral]

const terapiasEnJSON = JSON.stringify(Terapias)
localStorage.setItem("terapias a elección", terapiasEnJSON)
console.log(terapiasEnJSON)

// function terapiaEleccion (){
//     let Eleccion = prompt("Elegí que terapia querés realizar").toLowerCase();

// }

// botones sesiones

let botones = document.getElementsByClassName("btn btn-outline-dark")

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", bienvenida);
}

botones.addEventListener = ("click", bienvenida)

// gardado de datos del form

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputMail = document.getElementById("mail");
const inputFecha = document.getElementById("fecha-de-nacimiento")
const inputLugar = document.getElementById("lugar");
const inputHora = document.getElementById("hora");
const botonEnviar = document.getElementById("enviar");

function guardarForm (){
    const datosdelForm ={
        nombre:inputNombre.value,
        apellido:inputApellido.value,
        mail:inputMail.value,
        fecha:inputFecha.value,
        lugar:inputLugar.value,
        hora:inputHora.value,
    }
    let resultado=JSON.stringify(datosdelForm);
    localStorage.setItem("datosForm", resultado);
    console.log("datos ingresados por el usuario: " + resultado);
}

botonEnviar.addEventListener("click", guardarForm);


// function cargarForm(){
//     const formulario=document.getElementById("Form"),
//     const DatosJSON=localStorage.getItem("datosForm"),
//     if (DatosJSON){
//         const datosdelForm=JSON.parse(datosdelForm),
//         formulario.nombre.value=datosdelForm.nombre,
//     }
// }