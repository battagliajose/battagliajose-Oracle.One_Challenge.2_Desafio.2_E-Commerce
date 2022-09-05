import { productsController } from "./controllers/productos-controller.js";

var btnAgregarProducto = document.querySelector("#btnAgregarProducto");

btnAgregarProducto.addEventListener("click", function() {
    window.open("agregarproducto.html","_self");
})

productsController.renderAll();