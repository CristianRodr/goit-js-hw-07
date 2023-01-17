import { galleryItems } from "./gallery-items.js";
//console.log(galleryItems[0].preview); prueba

const gallery = document.querySelector(".gallery");

// ~******************************************************~
// 1. creacion de marca, plantilla
// 2. recorrer array y hacer una sola cadena con tags HTML
// 2. imagen original debe almacenarse en data-atributo source del elemento <img>
const crearEtiquetas = (pictureItems) => {
  return pictureItems
    .map(
      (item) => `
    <div class = "gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img 
        class="gallery__image" 
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}
        "/>
      </a>
    </div> `
    )
    .join("");
};

const mostrarGaleria = crearEtiquetas(galleryItems);

gallery.innerHTML = mostrarGaleria;

// ~**************************************************~

function accionBloqueo(event) {
  event.preventDefault();
}

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

  // 3. Añada cerrar la ventana modal pulsando Escape
  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
//_________________________________________________________
