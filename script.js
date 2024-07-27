document.addEventListener('DOMContentLoaded', () => {
    const humoContainer = document.querySelector('.humo');
    const cantidadHumo = 70; // Número de partículas de humo

    function crearHumo() {
        for (let i = 0; i < cantidadHumo; i++) {
            const li = document.createElement('li');
            li.style.width = `${Math.random() * 80 + 150}px`; 
            li.style.height = `${Math.random() * 80 + 160}px`; // Tamaño entre 60px y 140p
            li.style.left = `${Math.random() * 52}%`; // Posición horizontal aleatoria (100% para abarcar todo el contenedor)
            li.style.bottom = `0`; // Alinea la base del humo con la base del contenedor
            li.style.animationDelay = `${Math.random() * 5}s`; // Retraso de animación aleatorio
            li.classList.add('humo-item'); // Añadir clase para animación
            humoContainer.appendChild(li);
        }
    }

    crearHumo();
});
