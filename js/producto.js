import { productosServices } from "./services/productos-servicios.js";

const productoDiv = document.querySelector("[data-producto]");
const secondChild = document.querySelector("[data-secondchild]");

const url = new URL(window.location);
const id = url.searchParams.get("id");

const producto = await productosServices.getProducto(id);
console.log(producto);

const div = document.createElement("div");
div.classList.add("producto__producto");

const content = `
<img class="producto__producto__imagen" src="${producto.imageurl}"></img>
<div class="producto__producto__detalle">
    <h1>${producto.name}</h1>
    <h4>$ ${producto.price}.00</h4>
    <h4>id: ${id}</h4>
    <p>${producto.description}</p>
</div>`

div.innerHTML = content;

productoDiv.insertBefore(div, secondChild);