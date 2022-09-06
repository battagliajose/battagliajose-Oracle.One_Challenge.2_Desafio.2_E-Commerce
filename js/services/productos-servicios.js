const url = "http://localhost:3000/productos"

const listaProductos = () => fetch(url).then(respuesta => respuesta.json());

const getProducto = (id) => { 
    return fetch(url + `/${id}`).then(respuesta => respuesta.json());
};

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

const eliminarProducto = (id) => {
    return fetch(`${url}/${id}`, {
        method: "DELETE",
    });
};
const actualizarProducto = (name, section, alt, price, description, imageurl, id) => {
    return fetch(url + `/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, section, alt, price, description, imageurl })
    })
    .then( respuesta => console.log(respuesta))
    .catch(err => console.log(err));
};

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    getProducto,
    actualizarProducto
}
