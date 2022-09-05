const url = "http://localhost:3000/usuarios"

const listaUsuarios = () => fetch(url).then(respuesta => respuesta.json());

export const usuariosServices = {
    listaUsuarios
}