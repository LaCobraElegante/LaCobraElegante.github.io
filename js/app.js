// Selecciona el div con la clase "hamburguesa"
const menu = document.querySelector('.hamburguesa');
// Selecciona el navbar
const nav= document.querySelector('.nav');

// Esto lo que hará que primero cargará el archivo html y luego el de javascript
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

// evento para que cuando el usuario haga click se ejecute la función de "abrirMenu"
const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

// Remueve la clase hide del navbar para así poder mostrarlo y manda a llamar el botón de cerrar
const abrirMenu = () =>{
    nav.classList.remove('hide');
    botonCerrar();
}

// Crea el botón para cerrar el menú
const botonCerrar =() =>{
    // Crea un elemento p una X con la clase de btnCerrar
    const btnCerrar = document.createElement('p');
    // Creación del overlay oscuro que cubre la pantalla
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    // Seleciona el body
    const body = document.querySelector('body');
      // Condición para seleccionar todos los overlays y eliminarlos
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    // Inyecta el overlay en el body
    body.appendChild(overlay);
    // Le da la clase btnCerrar y agregamos la X al p
    btnCerrar.textContent = '✕';
    btnCerrar.classList.add('btnCerrar');
    // Agrega el botón al navbar y le da la clase btnCerrar
    nav.appendChild(btnCerrar);
    // manda a llamar el botón X y el overlay oscuro 
    cerrarMenu(btnCerrar,overlay);
}

// Funciones para el botón cerrar
const cerrarMenu = (boton, overlay) =>{
    // añade el evento tipo click al botón
    boton.addEventListener('click', ()=>{
    // añade la clase hide para esconder el navbar y el overlay al hacer click en al X
	nav.classList.add('hide');
	overlay.remove();
	boton.remove();
    });

    // Evento para que al hacer click en el overlay se quite el navbar y el overlay
    overlay.onclick = function(){
	overlay.remove();
	nav.classList.add('hide');
	boton.remove();
    }
}
