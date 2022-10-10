import productos from "./productos.json" assert { type: "json" };

//cargar lista de productos en pantalla
function loadProducts() {
  productos.forEach(function (prod) {
    const cuerpo= document.createElement("div");
    cuerpo.setAttribute("class", "cuerpo");
    cuerpo.innerHTML= `<img src=${prod.img} alt=${prod.alt}>`;
    const info= document.createElement("div");
    info.innerHTML= 
    `<p class="precioProducto">$${prod.precio}</p>
    <p class="nombreProducto">${prod.nombre}</p>
    <a href=""><i class="fa-solid fa-cart-plus"></i>Añadir al carrito</a>`;
    const tarjeta=document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");
    tarjeta.appendChild(cuerpo);
    tarjeta.appendChild(info);
    document.querySelector(".productos").appendChild(tarjeta);
  });
}

loadProducts();