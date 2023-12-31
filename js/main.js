// Fx constructora objetos terapia

const terapia = function(nombre, precio, tipo, extra, precioad, img){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.extra = extra;
    this.precioad = precioad;
    this.img = img;
};

// Variables de objetos de terapias

let astrologia = new terapia ("Astrología", 10000, "Carta Astral + Revolucion Solar. Duración: 2:30hs", "Revolución Solar", 3000, "../assets/icons/zodiac.png");
let reiki = new terapia ("Reiki", 5000, "Sesiones individuales. Duración: 1hs", "", "", "../assets/icons/reiki.png");
let constelaciones = new terapia ("Constelaciones Familiares", 12000, "Sesión grupal (grupos de 5/6 personas). Duración: 4hs", "", "", "../assets/icons/constelaciones.png");
let tarot = new terapia ("Tarot", 5000, "Retrato actual del consultante. Duración: 1hs", "Tres preguntas", 2000, "../assets/icons/taroh.png");
let radiestesia = new terapia ("Radiestesia", 8000, "Armonización y limpieza de contaminantes energéticos. Duración: 1:30hs", "Armonización", 3000, "../assets/icons/radiestesia.png");
let numerologia = new terapia ("Numerología", 6000, "Lectura clásica anual (de cumpleaños). Duración: 1hs", "Anual por cumpleaños", 4000, "../assets/icons/numerologia.png");
let registros = new terapia ("Registros Akashicos", 6000, "Devolución de cinco preguntas (Se solicitan previamente). Duración: 1:30hs", "Tres preguntas más", 3000, "../assets/icons/akasha.png");
let tFloral = new terapia ("Terapia Floral de Bach", 7000, "Sesión individual, incluye frasco 30ml. Duración: 1hs", "Frasco grande", 1500, "../assets/icons/flores.png");

// Array terapias

const Terapias = [astrologia, reiki, constelaciones, tarot, radiestesia, numerologia, registros, tFloral];

// terapias a local

const terapiasEnJSON = JSON.stringify(Terapias);
localStorage.setItem("Listado de terapias", terapiasEnJSON);

// TIENDA Y CARRITO DE COMPRA

const Tienda = document.getElementById("Tienda");
const carritoTienda = document.getElementById("carritoTienda");
const MCarrito = document.getElementById("modalCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// traer de json y armar cards y carrito de la tienda

const getTerapias = async() => {
    const response = await fetch ("../data.json");
    const data = await response.json();
    
    data.forEach((recorrido) => {
        let contenido = document.createElement("div");
        contenido.className = "cardsCompras";
        contenido.innerHTML = `
        <img src=${recorrido.img}>
        <h2>${recorrido.nombre}</h2>
        <p>${recorrido.tipo}</p>
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
                tipo: recorrido.tipo,
                precio : recorrido.precio,
            });
            console.log (carrito);
        }) 
    });
    
    
    
    const cosasCarrito = () => {
        MCarrito.innerHTML = "";
        MCarrito.style.display = "flex";
        
        const modalCarrito= document.createElement("div");
        modalCarrito.className = "sumaCarrito";
        modalCarrito.innerHTML = `
        <h2 class="tituloModal">terapias elegidas</h2>
        `
        MCarrito.append(modalCarrito);
        
        carrito.forEach((recorrido) =>{
            let contenidoCarrito = document.createElement("div");
            contenidoCarrito.className = "contenidoCarrito";
            contenidoCarrito.innerHTML = `
            <h3>${recorrido.nombre}</h3>
            <p>$ ${recorrido.precio}</p>
            `
            MCarrito.append(contenidoCarrito);
    
            console.log(carrito.length);
    
            let eliminar = document.createElement("div");
            eliminar.innerHTML = `
                <img  class="btneliminar" src="../assets/delete.png ">
            `
            MCarrito.append(eliminar);
    
            eliminar.addEventListener("click", eliminarProductos)
        });
        
        const totalCarrito = carrito.reduce((acc, pp) => acc + pp.precio, 0);
        
        let precioApagar = document.createElement("div");
        precioApagar.className = "precioApagar";
        precioApagar.innerHTML = `
        <p>Total a pagar: $ ${totalCarrito} </p>
        `;
        MCarrito.append(precioApagar);
    
        const botonModal = document.createElement("div");
        botonModal.innerText = "cerrar";
        botonModal.className = "botonModal";
    
        botonModal.addEventListener("click", () =>{
            MCarrito.style.display = "none";
        });
        MCarrito.append(botonModal);
        saveLocal();
    };
    
    carritoTienda.addEventListener("click", cosasCarrito);

    const eliminarProductos = () => {
    
    const productoEliminado = carrito.find((element) => element.nombre);

    carrito = carrito.filter((nombreProducto) => {
        return nombreProducto !== productoEliminado;
    });
    cosasCarrito ();
    };
};

getTerapias();

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};