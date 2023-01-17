import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// ________________________________________________________
//1. creacion de marcas, plantilla
//2. recorrer array y hacer una sola cadena con tags HTML
const crearEtiquetas = (pictureItems) => {
  return pictureItems
    .map(
      (item) => `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
    )
    .join("");
};

const mostrarGaleria = crearEtiquetas(galleryItems);

gallery.innerHTML = mostrarGaleria;

// ________________________________________________________

// 3. Inicialización, ejecucion de la biblioteca SimpleLightbox

let lightbox = new SimpleLightbox(".gallery a");

//_________________________________________________________
