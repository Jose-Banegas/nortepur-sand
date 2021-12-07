//Este script lo escribi para manejar el despliegue de los enlaces de navegacion cuando se toca el botón menú en el modo mobile
// El append lo voy a hacer 

//DOM get
const menu = document.getElementById("menu");
const navbarItems = document.getElementById("navbar-items");
const ulNav = document.getElementById("ul-nav");
const navTop = document.getElementById("nav-top");
const navOffUsos = document.getElementById("navOffUsos");
const navOffContacto = document.getElementById("navOffContacto");

const usos = document.getElementById("usos");
const consulta = document.getElementById("consulta");
//Menu items
const menuItems = document.createElement("div");
menuItems.style.height = "355px";
menuItems.style.backgroundColor = "#00913c";
const exterior = document.createElement("div");
exterior.style.height = "100vh";
exterior.style.width = "100%";



var posible = true;
menu.onclick = function() {
	posible ? (
			navbarItems.appendChild(menuItems),
			menuItems.appendChild(ulNav),
			menuItems.appendChild(exterior),
			navbarItems.style.display = "block",
			posible = false
		) : (
			navbarItems.style.display = "none",
			posible = true
		);
}

exterior.onclick = function() {
			navbarItems.style.display = "none",
			posible = true

}

//Devolver "automaticamente" los links a su lugar al volver a resolucion desktop
window.addEventListener('resize', function() {
	if (window.innerWidth >= 1024) {
		navTop.appendChild(ulNav);
		navbarItems.style.display = "none";
		posible = true;
	}
})

//Guardar al clickear alguno de los links que hacen scroll

navOffUsos.onclick = function() {
	usos.scrollIntoView();
	navbarItems.style.display = "none",
	posible = true
}

navOffContacto.onclick = function() {
	consulta.scrollIntoView();
	navbarItems.style.display = "none";
	posible = true;

}
