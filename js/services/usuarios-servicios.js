const url = "http://localhost:3000/usuarios"

const listaProductos = () => fetch(url).then(respuesta => respuesta.json());

console.log(listaProductos());