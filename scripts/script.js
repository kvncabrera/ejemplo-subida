let enlaces  = document.querySelectorAll('.galeria .a')
let lightbox = document.querySelector('.lightbox')
let grande   = document.querySelector('.grande')
let cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let efecto = cadaEnlace.querySelector('.img').src
        console.log( efecto ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', efecto)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})

// Se añade la clase activo al elemento con la clase .lightbox para hacer que aparezca.
// Se establece la ruta de la imagen grande (grande) con la ruta obtenida en el paso anterior.
// Se agrega un event listener al botón de cierre (.cerrar). Cuando se hace clic en él, se elimina la clase activo del elemento con la clase .lightbox, lo que oculta la luz de fondo.





