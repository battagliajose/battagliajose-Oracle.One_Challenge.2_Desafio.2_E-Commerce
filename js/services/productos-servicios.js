const url = "http://localhost:3000/productos"

const listaProductos = () => fetch(url).then(respuesta => respuesta.json());

const crearProducto = (name, section, alt, price, description, imageurl) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ 
            name,
            section,
            alt,
            price,
            description,
            imageurl
        })
    }).then( respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
        throw new Error("No fue posible crear un producto");
    })
}

export const productosServices = {
    listaProductos,
    crearProducto
}
