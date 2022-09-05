import { productosServices } from "../services/productos-servicios.js";

const crearHTMLProducto = (name, price, imageUrl) => {
    //crea html de card de productos.
    const card = document.createElement("div");

    card.classList.add("productsContainer__items__item")
    const contenido = `<img src="${imageUrl}" alt="StarWars1">
    <p>${name}</p>
    <p>$ ${price}.00</p>
    <a href="producto.html">Ver producto</a>`

    card.innerHTML = contenido;

    return card;
};

const agregarProducto = (name, price, imageUrl) => {
    //Agrega productos al listado.
    const card = crearHTMLProducto(name, price, imageUrl);
    const productsList = document.querySelector("[data-productsList]");
    productsList.appendChild(card);
}

const render = async () => {
    try {
        const listaProductos = await productosServices.listaProductos();
        listaProductos.forEach(p => {
            agregarProducto(p.name, p.price, p.imageurl);
        });
    } catch (error) {
        console.log(error);
    };
};

render();
