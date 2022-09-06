import { productosServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");

const name = document.querySelector("[data-name]");
const section = document.querySelector("[data-section]");
const price = document.querySelector("[data-price]");
const imageUrl = document.querySelector("[data-imageurl]");
const description = document.querySelector("[data-description]");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(id) {
        productosServices.actualizarProducto(name.value, section.value, name.value, price.value, description.value, imageUrl.value, id)
        .then( respuesta => {
            window.location.href = "/index.html";
            alert("Producto Actualizado!");
        }).catch(error => {
            console.log(error)
        });
    } else {
        productosServices.crearProducto(name.value, section.value, name.value, price.value, description.value, imageUrl.value)
        .then( respuesta => {
            window.location.href = "/index.html";
            alert("Producto Actualizado!");
        }).catch(error => {
            console.log(error)
        });
    }
});

const url = new URL(window.location);
const id = url.searchParams.get("id");

console.log(id);

if (id) {
    const producto = await productosServices.getProducto(id);
    const titulo = document.querySelector("[data-titulo]")
    const boton = document.querySelector ("[data-boton]")
    titulo.textContent = "Modificar";
    boton.textContent = "Modificar Producto";

    name.value = producto.name;
    section.value = producto.section;
    price.value = producto.price;
    description.value = producto.description;
    imageUrl.value = producto.imageurl;
}

