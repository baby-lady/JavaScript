
function Edad(){
    edadUsuario = parseInt(prompt("Ingrese su edad"));
    edadUsuario > 18 ? console.log("El usuario es mayor de edad") : console.log("El usuario es menor de edad");
    if (edadUsuario >= 18){
        window.location.href = "compras.html";
    } else {
        // alert("Usted no tiene permitido el acceso");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No tenés permito el acceso",
        });
    }
}

// botones página terapias

let botones = document.getElementsByClassName("btn btn-outline-dark")

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", Edad);
}

botones.addEventListener = ("click", Edad);


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

let astrologia = new terapia ("Astrología", 10000, "Carta Astral + Revolucion Solar. Duración: 2:30hs", "Revolución Solar", 3000, "../assets/icons/zodiac.png")
let reiki = new terapia ("Reiki", 5000, "Sesiones individuales. Duración: 1hs", "", "", "../assets/icons/reiki.png")
let constelaciones = new terapia ("Constelaciones Familiares", 12000, "Sesión grupal (grupos de 5/6 personas). Duración: 4hs", "", "", "../assets/icons/constelaciones.png")
let tarot = new terapia ("Tarot", 5000, "Retrato actual del consultante. Duración: 1hs", "Tres preguntas", 2000, "../assets/icons/taroh.png")
let radiestesia = new terapia ("Radiestesia", 8000, "Armonización y limpieza de contaminantes energéticos. Duración: 1:30hs", "Armonización", 3000, "../assets/icons/radiestesia.png")
let numerologia = new terapia ("Numerología", 6000, "Lectura clásica anual (de cumpleaños). Duración: 1hs", "Anual por cumpleaños", 4000, "../assets/icons/numerologia.png")
let registros = new terapia ("Registros Akashicos", 6000, "Devolución de cinco preguntas (Se solicitan previamente). Duración: 1:30hs", "Tres preguntas más", 3000, "../assets/icons/akasha.png")
let tFloral = new terapia ("Terapia Floral de Bach", 7000, "Sesión individual, incluye frasco 30ml. Duración: 1hs", "Frasco grande", 1500, "../assets/icons/flores.png")

//array terapias

const Terapias = [astrologia, reiki, constelaciones, tarot, radiestesia, numerologia, registros, tFloral]

const terapiasEnJSON = JSON.stringify(Terapias)
localStorage.setItem("Listado de terapias", terapiasEnJSON)


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
    contenido.className = "cardsCompras"
    contenido.innerHTML = `
    <img src=${recorrido.img}>
    <h2>${recorrido.nombre}</h2>
    <p>${recorrido.tipo}
    <p>$${recorrido.precio}</p>
    `;
    Tienda.append(contenido);

    let compras = document.createElement("button");
    compras.innerText = "Agregar al carrito";
    compras.className = "comprar";
    contenido.append(compras);

    compras.addEventListener("click", () => {
        carrito.push({
            nombre : recorrido.nombre,
            precio : recorrido.precio,
        })
        console.log (carrito)
    })
});

