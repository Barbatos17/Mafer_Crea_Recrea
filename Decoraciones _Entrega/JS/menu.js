const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a'); // Para cerrar al hacer click en un link

// Abrir / Cerrar menú
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Opcional: Cambiar icono de hamburguesa a X
    const icon = burgerMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar menú automáticamente al dar click en un enlace
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Evita cerrar si tocas "Servicios" (que es desplegable)
        if (!item.classList.contains('dropbtn')) {
            navLinks.classList.remove('active');
            
            // Resetear icono a hamburguesa
            const icon = burgerMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Tu lógica de scroll existente (Header sticky)
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    
    // Solo ocultar si el menú NO está abierto
    if (!navLinks.classList.contains('active')) {
        if (currentScroll > lastScroll && currentScroll > 150) {
            navbar.style.top = "-100px";
        } else {
            navbar.style.top = "0";
        }
    }
    lastScroll = currentScroll;
});
/* =========================================
   LÓGICA PARA EL SUBMENÚ (SERVICIOS)
   ========================================= */
const btnServicios = document.getElementById('btnServicios');
const dropContent = document.querySelector('.dropdown-content');
if (btnServicios && dropContent) {
    btnServicios.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evita que el clic cierre el menú principal
        // Abrir o cerrar
        dropContent.classList.toggle('active');
    });
}