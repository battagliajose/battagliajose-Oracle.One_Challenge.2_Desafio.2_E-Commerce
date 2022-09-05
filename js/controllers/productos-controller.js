import { productosServices } from "../services/productos-servicios.js";

const crearHTMLProducto = (name, price, imageUrl, alt) => {
    //crea html de card de productos.
    const card = document.createElement("div");

    card.classList.add("productsContainer__items__item")
    const contenido = `<img src="${imageUrl}" alt="${alt}">
    <p>${name}</p>
    <p>$ ${price}.00</p>
    <a href="producto.html">Ver producto</a>`

    card.innerHTML = contenido;

    return card;
};

const crearHTMLEncabezado = (name) => {
    const nameForData = name.replaceAll(/\s/g, '_');
    const header = document.createElement("div");
    const contenido = 
    `<div class="productsContainer">
        <div class="productsContainer__header">
            <h2>${name}</h2>
            <div>
                <a href="productos.html">
                    <h4>Ver todo</h4>
                    <img src="img/arrow.png" alt="flecha">
                </a>
            </div>
        </div>
        <div class="productsContainer__items"  data-productsList-${nameForData}>
            
        </div>
    </div>`;

    header.innerHTML = contenido;

    return header;
};

const agregarProducto = (name, price, imageUrl, alt, section) => {
    //Agrega productos al listado.
    const sectionForData = section.replaceAll(/\s/g, '_');
    const card = crearHTMLProducto(name, price, imageUrl, alt);
    const productsList = document.querySelector(`[data-productsList-${sectionForData}]`);
    productsList.appendChild(card);
};

const agregarEncabezado = (name) => {
    //Agrega el encabezado para los productos.
    const headerDiv = crearHTMLEncabezado(name);
    const productsSection = document.querySelector("[data-products]");
    productsSection.appendChild(headerDiv);
};

const render = async (filter = null, maxItems = 1000) => {
    try {
        let i = 0;
        let listaProductos = await productosServices.listaProductos();
        if (filter != null) {
            listaProductos = listaProductos.filter(p => {
                return p.name.toLowerCase().includes(filter.toLowerCase());
            });
        }
        const listaEncabezados = listaSecciones(listaProductos);

        const productsSection = document.querySelector("[data-products]");
        productsSection.innerHTML="";

        listaEncabezados.forEach(e => {
            agregarEncabezado(e);
            listaProductos.forEach(p => {
                if(p.section == e && i < maxItems) {
                    agregarProducto(p.name, p.price, p.imageurl, p.alt, p.section);
                    i++
                }
            });
            i = 0;
        });

    } catch (error) {
        console.log(error);
    };
};

const renderAll = async () => {
    try {
        let listaProductos = await productosServices.listaProductos();
        
        const productsList = document.querySelector(`[data-productsList]`);

            listaProductos.forEach(p => {
                const card = crearHTMLProducto(p.name, p.price, p.imageurl, p.alt, p.section);
                productsList.appendChild(card);
            });

    } catch (error) {
        console.log(error);
    };
};

const listaSecciones = (listaProductos) => {
    let secciones = [];

    listaProductos.forEach(p => {
        if (secciones.indexOf(p.section, 0) < 0) {
            secciones.push(p.section);
        }
    });

    return secciones;
};

export const productsController = {
    render,
    renderAll
}
