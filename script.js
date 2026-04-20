/**
 * @file script.js
 * @description Lógica para Portfólio: Digitação, Revelação e Scroll.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. EFEITO DE DIGITAÇÃO
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const fullText = "Cloud & DevOps Engineer | AWS | Terraform | FinOps";
        typingElement.textContent = ""; // Garante que comece vazio
        let charIndex = 0;

        function type() {
            if (charIndex < fullText.length) {
                typingElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            }
        }
        setTimeout(type, 500); // Pequeno delay inicial
    }

    // 2. REVELAR SEÇÕES AO ROLAR
    const sections = document.querySelectorAll('.content-section');
    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = window.innerHeight - 100;

            if (sectionTop < revealPoint) {
                section.classList.add('appear');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executa uma vez no carregamento

    // 3. SCROLL SUAVE
    const navLinks = document.querySelectorAll('.nav-menu a, .hero-cta a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const offsetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});