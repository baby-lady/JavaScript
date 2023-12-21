// Botones página terapias

let botones = document.getElementsByClassName("btn btn-outline-dark");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", ()=>{ window.location.href = "compras.html"});
}

botones.addEventListener = ("click", ()=>{ window.location.href = "compras.html"});
