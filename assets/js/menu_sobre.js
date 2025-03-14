// Seleciona os elementos do botão de hambúrguer e do menu lateral
const hamburgerBtnSobre = document.getElementById('hamburger-btn-sobre');
const mobileMenuSobre = document.getElementById('mobile-menu-sobre');
const closeMenuBtnSobre = document.getElementById('close-menu-sobre');

// Abre o menu lateral ao clicar no botão de hambúrguer
hamburgerBtnSobre.addEventListener('click', () => {
    mobileMenuSobre.classList.remove('hidden');
});

// Fecha o menu lateral ao clicar no botão de fechar
closeMenuBtnSobre.addEventListener('click', () => {
    mobileMenuSobre.classList.add('hidden');
});

// Fecha o menu lateral ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === mobileMenuSobre) {
        mobileMenuSobre.classList.add('hidden');
    }
});