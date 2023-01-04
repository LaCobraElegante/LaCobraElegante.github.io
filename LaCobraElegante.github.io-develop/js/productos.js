const stockProductos= [{
  "id": 1,
  "nombre": "mesa de comedor",
  "descripcion": "mesa generica",
  "precio": 15000,
  "img": "assets/img/Productos/mesa1.jpg",
  "cantidad": 1
},
{
  "id": 2,
  "nombre": "mesa de comedor",
  "descripcion": "mesa generica",
  "precio": 9000,
  "img": "assets/img/Productos/mesa4.jpg"
},
{
  "id": 3,
  "nombre": "silla para patio",
  "descripcion": "silla",
  "precio": 6000,
  "img": "assets/img/Productos/silla5.jpg"
},
{
  "id": 4,
  "nombre": "soporte impresora",
  "descripcion": "de la mejor calidad!",
  "precio": 4000,
  "img": "assets/img/Productos/soporteimpresora.jpg"
},
{
  "id": 5,
  "nombre": "Encimera de cocina",
  "descripcion": "mesa generica",
  "precio": 20000,
  "img": "assets/img/Productos/escritorio11.jpg"
},
{
  "id": 6,
  "nombre": "Silla para living",
  "descripcion": "silla especial",
  "precio": 9000,
  "img": "assets/img/Productos/silla6.jpg"
},
{
  "id": 7,
  "nombre": "Repisa blanca",
  "descripcion": "blanca y lisa",
  "precio": 7000,
  "img": "assets/img/Productos/repisa7.jpg"
},
{
  "id": 8,
  "nombre": "Escritorio",
  "descripcion": "hola",
  "precio": 10000,
  "img": "assets/img/Productos/escritorio1.jpg"
},
{
  "id": 9,
  "nombre": "Sila para patio",
  "descripcion": "chau",
  "precio": 6000,
  "img": "assets/img/Productos/silla5.jpg"
}
];

const contenedor= document.querySelector('.productos');

let carrito=[];


stockProductos.forEach((prod) =>  {
  const {id,nombre,precio,descripcion,img,cantidad} = prod  
  contenedor.innerHTML +=`
  <div class="tarjeta">
  <div class="cuerpo">
      <img src='${img}'>
  </div>
  <p class="precioProducto">$${precio}</p>
  <p class="nombreProducto">${nombre}</p>
  <a  onclick="agregarProducto(${id})"><i class="fa-solid fa-cart-plus"></i>Añadir al carrito</a>
  </div>`
})

function agregarProducto(id){
  const item = stockProductos.find((prod)=> prod.id === id)
  carrito.push(item)
  mostrarCarrito()
}

const mostrarCarrito = () => {
  const modalBody=document.querySelector('.cart-items')

  carrito.forEach((prod) => {
    const {id,nombre,precio,descripcion,img,cantidad} = prod
    modalBody.innerHTML +=`<div class="cart-item">
    <img class="img-item-cart" src='${img}'>
    <div class="">
    <p>Producto:${nombre}</p>
    <p>Precio:${precio}</p>
    <p>Cantidad:${cantidad}</p>
    <button class="">Eliminar Producto</button>
    </div>
    </div>`
  })
}
