import { productosServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const name = document.querySelector("[data-name]").value
    const section = document.querySelector("[data-section]").value
    const price = document.querySelector("[data-price]").value
    const imageUrl = document.querySelector("[data-imageurl]").value
    const description = document.querySelector("[data-description]").value
    
    
    productosServices.crearProducto(name, section, name, price, description, imageUrl)
    .then( respuesta => {
        window.location.href = "/index.html";
        alert("Producto Creado!");
    }).catch(error => {
        console.log(error)
    });
});