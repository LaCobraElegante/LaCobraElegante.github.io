//Botones para abrir y cerrar el navbar. Aparte de añadirle un overlay oscuro para cuando se abra el mismo

const menu = document.querySelector('.hamburguesa');
const nav  = document.querySelector('.nav');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});
const eventos = () => { menu.addEventListener('click',abrirMenu); }
const abrirMenu = () =>{
    nav.classList.remove('hide');
    botonCerrar();
}
const botonCerrar =() =>{
    const btnCerrar = document.createElement('p');
    const overlay   = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = '✕';
    btnCerrar.classList.add('btnCerrar');
    nav.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}
const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
    nav.classList.add('hide');
	overlay.remove();
	boton.remove();
    });
    overlay.onclick = function(){
	overlay.remove();
	nav.classList.add('hide');
	boton.remove();
    }
}

//Botón para eliminar items del carrito

const $cart = document.querySelector('.cartCard');
const $btn  = document.querySelector('.itemDelete');

$btn.addEventListener('click', ()=>{
    $cart.classList.add('hide'); 
});

//Botón para finalizar la compra

const $checkout      = document.querySelector('.buyButton');
const $checkoutCont  = document.querySelector('.buyButtonContainer');
const $total         = document.querySelector('.totalPrice');
const $cartContainer = document.querySelector('.cartContainer');

$checkout.addEventListener('click', ()=>{
    $total.classList.replace('totalPrice', 'hide');
    $checkoutCont.classList.replace('buyButtonContainer', 'hide');
    $cart.classList.add('hide');
    emptyCart();
});

const emptyCart =() =>{
    const $emptyCartMsg = document.createElement('p');
    $emptyCartMsg.textContent = 'Tu Carrito está vacío!!'
    $emptyCartMsg.classList.add('emptyCartMsg')
    $cartContainer.appendChild($emptyCartMsg)

}