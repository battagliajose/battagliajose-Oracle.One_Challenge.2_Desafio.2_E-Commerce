import { usuariosController } from "./controllers/usuarios-controller.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.querySelector("[data-name]").value;
    const pass = document.querySelector("[data-pass]").value;

    const usuarioValido = usuariosController.validarUsuario(user, pass).then( (respuesta) => {
        if (respuesta == true) {
            alert(`Usuario ${user} Validado!`);
            window.location.href = "/productos.html";
        } else {
            alert(`Usuario o contraseña incorrecto!`);
        }
    });
    
});

