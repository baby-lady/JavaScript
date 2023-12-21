// PÁGINA ÚNETE; form

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputMail = document.getElementById("mail");
const inputFecha = document.getElementById("fecha-de-nacimiento")
const inputLugar = document.getElementById("lugar");
const inputHora = document.getElementById("hora");
const botonEnviar = document.getElementById("enviar");

function guardarForm() {
    const datosdelForm = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        mail: inputMail.value,
        fecha: inputFecha.value,
        lugar: inputLugar.value,
        hora: inputHora.value,
    };

    if (Object.values(datosdelForm).every(value => value.trim() !== '')) {
        let resultado = JSON.stringify(datosdelForm);
        localStorage.setItem("datosForm", resultado);
        Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Tus datos fueron enviados correctamente.",
        });

        cargarForm();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los datos ingresados no son correcto, intentá nuevamente",
        });
    };
};

botonEnviar.addEventListener("click", guardarForm);

function cargarForm() {
    const formulario = document.getElementById("Form");
    const datosJSON = localStorage.getItem("datosForm");

    if (datosJSON) {
        const datosdelForm = JSON.parse(datosJSON);
        formulario.nombre.value = datosdelForm.nombre;
        formulario.apellido.value = datosdelForm.apellido;
        formulario.mail.value = datosdelForm.mail;
        formulario.fecha.value = datosdelForm.fecha;
        formulario.lugar.value = datosdelForm.lugar;
        formulario.hora.value = datosdelForm.hora;

        console.log("Formulario cargado con éxito!");
    };
};