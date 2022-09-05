import { usuariosServices } from "../services/usuarios-servicios.js";

const validarUsuario = async (usuario, clave) => {
    let listaUsuarios = await usuariosServices.listaUsuarios();

    listaUsuarios.forEach(usuarioRegistrado => {
        if (usuario == usuarioRegistrado.nombre && clave == usuarioRegistrado.clave) {
            return true
        } else {
            return false
        }
    });
}

export const usuariosController = {
    validarUsuario
}