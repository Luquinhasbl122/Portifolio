// Animação suave ao rolar a página para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de entrada dos elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Observa todas as seções para animação
document.querySelectorAll('section').forEach((section) => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Efeito de digitação no subtítulo
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Inicia o efeito de digitação quando a página carrega
window.addEventListener('load', typeWriter);

// Adiciona classe ativa no menu quando rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
}); 