/**
 * @file script.js
 * @description Funcionalidades JavaScript para o site de portfólio.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ... (mantenha as funções de Scroll Suave e Reveal Section que já funcionam)

    //-----------------------------------------------------
    // 3. EFEITO DE DIGITAÇÃO (Versão Corrigida)
    //-----------------------------------------------------
    const text = "Cloud & DevOps Engineer | AWS | Terraform | FinOps";
    const speed = 100; 
    let i = 0;
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        // Limpa o texto que veio do HTML para começar a animação
        typingElement.innerHTML = ""; 
        
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