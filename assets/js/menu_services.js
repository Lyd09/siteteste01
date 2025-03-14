// Seleciona os elementos do botão de hambúrguer e do menu lateral
const hamburgerBtnServices = document.getElementById('hamburger-btn-services');
const mobileMenuServices = document.getElementById('mobile-menu-services');
const closeMenuBtnServices = document.getElementById('close-menu-services');

// Abre o menu lateral ao clicar no botão de hambúrguer
hamburgerBtnServices.addEventListener('click', () => {
    mobileMenuServices.classList.remove('hidden');
});

// Fecha o menu lateral ao clicar no botão de fechar
closeMenuBtnServices.addEventListener('click', () => {
    mobileMenuServices.classList.add('hidden');
});

// Fecha o menu lateral ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === mobileMenuServices) {
        mobileMenuServices.classList.add('hidden');
    }
});