const presupuesto = document.getElementById("btn-main");
const formulario = document.getElementById("formulario");
const btnSup = document.getElementById("btn-sup");
const icono = document.getElementsByClassName('c5'); 
console.log(icono);
presupuesto.onclick = () => {
	formulario.scrollIntoView();
}


