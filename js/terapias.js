
function bienvenida(){
    edadUsuario = parseInt(prompt("Ingrese su edad"));
    edadUsuario > 18 ? alert("¡Bienvenido!") : alert("Debés ser mayor para continuar.");
    if (edadUsuario >= 18){
        window.location.href = "compras.html";
    } else {
        alert("Usted no tiene permitido el acceso");
    }
}

// botones página terapias

let botones = document.getElementsByClassName("btn btn-outline-dark")

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", bienvenida);
}

botones.addEventListener = ("click", bienvenida)


// creación de objetos de distintas terapias

const terapia = function(nombre, precio, tipo, extra, precioad, img){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.extra = extra;
    this.precioad = precioad;
    this.img = img;
}

// variables de objetos de terapias

let astrologia = new terapia ("Astrología", 10000, "Carta Natal", "Revolución Solar", 3000, "../assets/icons/zodiac.png")
let reiki = new terapia ("Reiki", 5000, "Individual", "", "", "../assets/icons/reiki.png")
let constelaciones = new terapia ("Constelaciones Familiares", 12000, "Grupal", "", "", "../assets/icons/constelaciones.png")
let tarot = new terapia ("Tarot", 5000, "Tirada completa", "Tres preguntas", 2000, "../assets/icons/taroh.png")
let radiestesia = new terapia ("Radiestesia", 8000, "Limpieza", "Armonización", 3000, "../assets/icons/radiestesia.png")
let numerologia = new terapia ("Numerología", 6000, "Lectura clasica", "Anual por cumpleaños", 4000, "../assets/icons/numerologia.png")
let registros = new terapia ("Registros Akashicos", 6000, "Tres preguntas", "Tres preguntas más", 3000, "../assets/icons/akasha.png")
let tFloral = new terapia ("Terapia Floral de Bach", 7000, "Sesión + frasco", "Frasco grande", 1500, "../assets/icons/flores.png")

//array terapias

const Terapias = [astrologia, reiki, constelaciones, tarot, radiestesia, numerologia, registros, tFloral]

const terapiasEnJSON = JSON.stringify(Terapias)
localStorage.setItem("terapias a elección", terapiasEnJSON)

// PÁGINA ÚNETE; form

// const inputNombre = document.getElementById("nombre");
// const inputApellido = document.getElementById("apellido");
// const inputMail = document.getElementById("mail");
// const inputFecha = document.getElementById("fecha-de-nacimiento")
// const inputLugar = document.getElementById("lugar");
// const inputHora = document.getElementById("hora");
// const botonEnviar = document.getElementById("enviar");

// function guardarForm (){
//     const datosdelForm ={
//         nombre:inputNombre.value,
//         apellido:inputApellido.value,
//         mail:inputMail.value,
//         fecha:inputFecha.value,
//         lugar:inputLugar.value,
//         hora:inputHora.value,
//     }
//     let resultado=JSON.stringify(datosdelForm);
//     localStorage.setItem("datosForm", resultado);
//     console.log("datos ingresados por el usuario: " + resultado);
// }

// botonEnviar.addEventListener("click", guardarForm);

// function cargarForm(){
//     const formulario=document.getElementById("Form"),
//     const DatosJSON=localStorage.getItem("datosForm"),
//     if (DatosJSON){
//         const datosdelForm=JSON.parse(datosdelForm),
//         formulario.nombre.value=datosdelForm.nombre,
//     }
// }

// TIENDA

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

const Tienda = document.getElementById("Tienda");

let carrito = []

Terapias.forEach((recorrido) => {
    let contenido = document.createElement("div");
    //contenido.classname = "cardTerapia";
    contenido.innerHTML = `
    <img src=${recorrido.img}>
    <h3>${recorrido.nombre}</h3>
    <p>$${recorrido.precio}</p>
    `;
    Tienda.append(contenido);

    let compras = document.createElement("button");
    compras.innerText = "Agregar al carrito";
    //compras.className = "comprar";

    contenido.append(compras);
    
});

