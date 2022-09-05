import { usuariosController } from "./controllers/usuarios-controller.js";

const form = document.querySelector("[data-form]");
const user = document.querySelector("[data-name]").value;
const pass = document.querySelector("[data-pass]").value;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(usuariosController.validarUsuario(user, pass).then(respuesta => console.log(respuesta)))
});

