// DOM

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const consulta = document.getElementById("consulta");
const form = document.getElementById("formulario");
const submit = document.getElementById("btn-submit");

const error = document.createElement("p")
error.innerHTML = " ";

form.appendChild(error);



/*  Validacion */


//nombre
let nombreListo = false;
const validarNombre = (event) => {
	event.target.value.trim()  != "" ?  (nombreListo = true, nombre.style.borderColor = "#00913c", error.innerHTML = "") : (nombreListo = false, nombre.style.borderColor = "black");
	
	console.log(nombreListo);
}

//telefono
let telefonoListo = false;
const validarTelefono = (event) => {
	if (event.target.value != "" && !isNaN(event.target.value) && event.target.value.length > 5) {
		telefonoListo = true;
		telefono.style.borderColor = "#00913c";
		"#00913c", error.innerHTML = ""
		} else { 
		telefonoListo = false;
		telefono.style.borderColor = "black";
	}

	console.log(telefonoListo);
}

//consulta
let consultaLista = false;
const validarConsulta = (event) => {
	event.target.value.trim() != "" ? (consultaLista = true, consulta.style.borderColor = "#00913c", error.innerHTML = "") : (consultaLista = false, consulta.style.borderColor = "black");

	console.log(consultaLista);
}

/* Submit */


const intentarSubmit = (event) => {
	event.preventDefault()
	nombreListo ? null : nombre.style.borderColor = "red";
	telefonoListo ? null : telefono.style.borderColor = "red";
	consultaLista ? null : consulta.style.borderColor = "red";
	if (nombreListo == false || telefonoListo == false || consultaLista == false) {

		error.style.color = "red";	
		error.innerHTML = "Ingrese todos los campos de forma válida";
	} else {
		error.style.color = "green"
		error.innerHTML = "Enviando consulta..."
		submit.style.backgroundColor = "#00913c";
		submit.style.color = "white";
		setTimeout(function() {form.submit()}, 2000)
		
	}
	
}



/* Event Handlers */

nombre.addEventListener('input', () => validarNombre(event));
telefono.addEventListener('input', () => validarTelefono(event));
consulta.addEventListener('input', () => validarConsulta(event));
submit.addEventListener('click', () => intentarSubmit(event));




