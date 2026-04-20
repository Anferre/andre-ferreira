/**
 * @file script.js
 * @description Funcionalidades JavaScript consolidadas: Scroll, Reveal e Typing.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SCROLL SUAVE ---
    const navLinks = document.querySelectorAll('.nav-menu a, .hero-cta a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    // --- 2. EFEITO DE REVELAÇÃO (Fade-in) ---
    const sections = document.querySelectorAll('.content-section');
    const revealSection = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };
    
    // Configuração inicial das seções
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    window.addEventListener('scroll', revealSection);
    revealSection(); // Ativa as que já estão na tela

    // --- 3. EFEITO DE DIGITAÇÃO ---
    const text = "Cloud & DevOps Engineer | AWS | Terraform | FinOps";
    const speed = 100; 
    let i = 0;
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        typingElement.innerHTML = ""; // Limpa o texto inicial
        
        function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
});