/**
 * OSTERIA DA GAZ - SCRIPT PRINCIPALE
 * Gestisce l'interattività di base del sito (es. menu mobile).
 */

document.addEventListener('DOMContentLoaded', function () {

    // Gestione Menu Mobile
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', function () {
            // Aggiunge o rimuove la classe 'active' per mostrare/nascondere il menu
            navMenu.classList.toggle('active');
        });
    }

    // Effetto Scroll fluido per i link interni (se ce ne sono)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log("Osteria da Gaz - Sito caricato correttamente.");
});
