import { productosServices } from "../services/productos-servicios.js";

let productos = productosServices.listaProductos()

console.log(productos);

const agregarProducto = (name, price, imageUrl) => {
    const productsList = document.querySelector("#productsList");
    const card = document.createElement("div");

    card.classList.add("productsContainer__items__item")
    const contenido = `<img src="${imageUrl}" alt="StarWars1">
    <p>${name}</p>
    <p>$ ${price}.00</p>
    <a href="producto.html">Ver producto</a>`

    card.innerHTML = contenido;

    productsList.appendChild(card);
}

agregarProducto("PRUEBA", 100, "../../img/starwars/sw_1.png");
agregarProducto("PRUEBA", 200, "../../img/starwars/sw_2.png");
agregarProducto("PRUEBA", 300, "../../img/starwars/sw_3.png");