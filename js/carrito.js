//variables
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions

document.onreadystatechange = () =>{
    if(document.readyState === "complete"){
        loadEventListenrs();
        loadProducts();
    }
};

function loadProducts(){
    productos = [{
        "id": 1,
        "nombre": "mesa de comedor",
        "descripcion": "mesa generica",
        "precio": 15000,
        "img": "assets/img/Productos/mesa1.jpg"
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

    productos.forEach(function(prod){

        const cuerpo = document.createElement("div");
        cuerpo.setAttribute("class", "cuerpo");
        cuerpo.innerHTML = `<img src=${prod.img} alt=${prod.alt}>`;
        const info = document.createElement("div");
        info.innerHTML =
        `<p class="precioProducto">$${prod.precio}</p>
         <p class="nombreProducto">${prod.nombre}</p>
         <a href=""><i class="fa-solid fa-cart-plus"></i>Añadir al carrito</a>`;
        const tarjeta = document.createElement("div");
        tarjeta.setAttribute("class", "tarjeta");
        tarjeta.appendChild(cuerpo);
        tarjeta.appendChild(info);
        document.querySelector(".productos").appendChild(tarjeta);
    });
}

function loadEventListenrs(){
    document.querySelector('.productos').addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }