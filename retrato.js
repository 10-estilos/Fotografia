const moal = documen.getElementById("meuModal");
const abrir = documento.getElementById("btnAbrirModal");
const fechar = document.getElementById("btnFecharModal");

abrir.onclick = () => {
    modal.style.display = "block";
}

fechar.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (evento) => {
    if(evento.target == modal){
        modal.style.display = "none";
    }
}