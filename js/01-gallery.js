import { galleryItems } from "./gallery-items.js";
//console.log(galleryItems[0].preview); prueba

const gallery = document.querySelector(".gallery");

//Truco
//recorrer array y hacer una sola cadena con tags HTML
const crearEtiquetas = (pictureItems) => {
  return pictureItems
    .map(
      (item) => `
    <div class = "gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}"/>
      </a>
    </div> `
    )
    .join("");
};

const mostrarGaleria = crearEtiquetas(galleryItems);

gallery.innerHTML = mostrarGaleria;

//accion_______________________________________________
gallery.addEventListener("click", enPintura);

function enPintura(event) {
  accionBloqueo(event);

  if (event.target.nodeName !== "IMG") {
    rerturn;
  }

  //aplicacion de lightbox
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function accionBloqueo(event) {
  event.preventDefault();
}
