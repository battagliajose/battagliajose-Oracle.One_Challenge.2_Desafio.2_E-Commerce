const url = "http://localhost:3000/productos"

const listaProductos = () => fetch(url).then(respuesta => respuesta.json());

// const listaSecciones = async () => {
//     const listaProductos = await productosServices.listaProductos();
//     let secciones = [];

//     listaProductos.forEach(p => {
//         if (secciones.indexOf(p.section, 0) < 0) {
//             secciones.push(p.section);
//         }
//     });

//     return secciones;
// };

export const productosServices = {
    listaProductos,
    //listaSecciones
}
