// Seleciona os elementos do botão de hambúrguer e do menu lateral
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');

// Abre o menu lateral ao clicar no botão de hambúrguer
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

// Fecha o menu lateral ao clicar no botão de fechar
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Fecha o menu lateral ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});