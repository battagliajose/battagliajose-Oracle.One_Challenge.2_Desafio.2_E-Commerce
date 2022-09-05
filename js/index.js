import { productsController } from "./controllers/productos-controller.js";

var btnLogin = document.querySelector("#btnLogin");
var inputFilter = document.querySelector("[data-inputfilter]");

inputFilter.addEventListener("input", function () { 
    productsController.render(inputFilter.value) 
});

btnLogin.addEventListener("click", function() {
    window.open("login.html","_self");
});