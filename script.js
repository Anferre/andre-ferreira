/**
 * @file script.js
 * @description Funcionalidades JavaScript para o site de portfólio.
 * @author André de Oliveira
 */

document.addEventListener('DOMContentLoaded', () => {

    //-----------------------------------------------------
    // 1. SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
    //-----------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-menu a, .hero-cta a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // O valor do 'padding-top' do cabeçalho para calcular o offset
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    //-----------------------------------------------------
    // 2. EFEITO DE REVELAÇÃO AO ROLAR (Subtle Fade-in)
    //-----------------------------------------------------
    const sections = document.querySelectorAll('.content-section, .hero-section');

    const revealSection = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Distância do topo para revelar

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - revealPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };
    
    // Estilo inicial para animação
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener('scroll', revealSection);
    // Chama a função uma vez para revelar a seção visível no carregamento
    revealSection();


    

});
