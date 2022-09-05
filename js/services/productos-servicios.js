const url = "http://localhost:3000/productos"

const listaProductos = () => fetch(url).then(respuesta => respuesta.json());

export const productosServices = {
    listaProductos
}
