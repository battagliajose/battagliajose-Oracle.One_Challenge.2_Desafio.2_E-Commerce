import { productosServices } from "./services/productos-servicios.js";

const cargarProducto = async () => {
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
        <h4></h4>
        <a href="agregarproducto.html?id=${id}">Modificar</a>
        <a href="#" data-linkeliminar>Eliminar</a>
    </div>`

    div.innerHTML = content;

    productoDiv.insertBefore(div, secondChild);

    const linkeliminar = document.querySelector("[data-linkeliminar]");
    linkeliminar.addEventListener("click", () => {
        productosServices.eliminarProducto(id);
        alert("Producto Eliminado!");
        window.location.href = "index.html";
    });
}

cargarProducto();

