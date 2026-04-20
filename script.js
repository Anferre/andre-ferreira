// Este alerta serve para confirmar se o cache foi limpo
alert("🚀 JS Carregado com sucesso na branch Dev!");

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Efeito de Digitação ---
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const text = "Cloud & DevOps Engineer | AWS | Terraform | FinOps";
        let i = 0;
        typingElement.innerHTML = ""; 

        function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // --- 2. Revelar Seções ao Rolar ---
    const sections = document.querySelectorAll('.content-section');
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Configuração inicial invisível
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    window.addEventListener('scroll', revealSection);
    revealSection(); // Ativa o que já estiver visível

    // --- 3. Scroll Suave ---
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
});