import { productsController } from "./controllers/productos-controller.js";

var btnLogin = document.querySelector("#btnLogin");
var btnVerConsolas = document.querySelector("#btnVerConsolas")
var inputFilter = document.querySelector("[data-inputfilter]");

inputFilter.addEventListener("input", function () { 
    productsController.render(inputFilter.value) 
});

btnLogin.addEventListener("click", function() {
    window.open("login.html","_self");
});

btnVerConsolas.addEventListener("click", function() {
    inputFilter.value = "Consola";
    productsController.render(inputFilter.value)
});

productsController.render(null, 6);

productsController