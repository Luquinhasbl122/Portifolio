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

// Configuração dos tooltips de habilidades
const skills = {
    js: {
        title: 'JavaScript',
        description: 'Desenvolvimento de aplicações web interativas e dinâmicas. Experiência com ES6+, DOM, APIs e frameworks modernos.',
        level: 85
    },
    css: {
        title: 'CSS3',
        description: 'Estilização avançada, layouts responsivos, animações e Flexbox/Grid. Foco em design moderno e experiência do usuário.',
        level: 90
    },
    html: {
        title: 'HTML5',
        description: 'Estruturação semântica de páginas web, acessibilidade, SEO e integração com tecnologias modernas.',
        level: 95
    },
    java: {
        title: 'Java',
        description: 'Desenvolvimento de aplicações desktop e backend. Conhecimentos em POO, Spring Boot e APIs REST.',
        level: 75
    },
    sql: {
        title: 'SQL',
        description: 'Banco de dados relacionais, consultas complexas, otimização e modelagem de dados.',
        level: 80
    }
};

// Inicializar tooltips
document.querySelectorAll('[data-skill]').forEach(element => {
    const skill = element.getAttribute('data-skill');
    const skillData = skills[skill];

    tippy(element, {
        content: `
            <div class="skill-tooltip">
                <h4>${skillData.title}</h4>
                <p>${skillData.description}</p>
                <div class="skill-level">
                    <div class="skill-level-bar" style="width: ${skillData.level}%"></div>
                </div>
            </div>
        `,
        allowHTML: true,
        animation: 'scale',
        theme: 'custom',
        placement: 'top',
        interactive: true,
        delay: [100, 200],
        maxWidth: 300
    });
});

function createTooltip(element, skill){
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.innerHTML = `
         <h4>${skill.title}</h4>
         <p>${skill.description}</p>
         <span>Nivel: ${skill.level}</span>

        `;
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
})

    element.addEventListener('mouseleave', () => { 
        const tooltip = document.querySelector('.custom-tooltip');
        if (tooltip) tooltip.remove();

})

}

