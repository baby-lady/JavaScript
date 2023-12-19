// PÁGINA ÚNETE; form

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