import { usuariosServices } from "../services/usuarios-servicios.js";

const validarUsuario = async (usuario, clave) => {
   
    let listaUsuarios = await usuariosServices.listaUsuarios();
    let userStatus = false;

    listaUsuarios.forEach(usuarioRegistrado => {
        if (usuario == usuarioRegistrado.name && clave == usuarioRegistrado.pass) {
            userStatus = true;
        }
    });

    return userStatus;
}

export const usuariosController = {
    validarUsuario
}