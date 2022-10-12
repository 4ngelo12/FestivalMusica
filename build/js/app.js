document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-img');

    for (let i = 1; i >= 12; i++) {
        const img = document.createElement('picture');
        img.innerHTML = `
            <source srcset="build/img/imagen_vocalista.avif" type="image/avif">
            <source srcset="build/img/imagen_vocalista.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/imagen_vocalista.jpg"
                alt="Imagen de volcalista">
        `

        galeria.appendChild(img);
    }
}