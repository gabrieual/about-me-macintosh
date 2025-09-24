
// Pega todos os gatilhos de menu
const menuTitles = document.querySelectorAll('.menu-title');

menuTitles.forEach(title => {
title.addEventListener('click', function(event) {
    // Impede que o clique se propague para o 'window' e feche o menu imediatamente
    event.stopPropagation();

    // Encontra o menu dropdown irmão deste título
    const dropdown = this.nextElementSibling;
    
    // Fecha todos os outros menus que possam estar abertos
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (menu !== dropdown) {
        menu.classList.remove('show');
    }
    });

    // Alterna a classe 'show' no menu atual (abre se estiver fechado, fecha se estiver aberto)
    if (dropdown) {
    dropdown.classList.toggle('show');
    }
});
});

// Fecha o menu se o usuário clicar em qualquer outro lugar da página
window.addEventListener('click', function() {
document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('show');
});
});
