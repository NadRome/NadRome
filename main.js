// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect for hero command
document.addEventListener('DOMContentLoaded', () => {
    const cmd = document.querySelector('.cmd');
    if (!cmd) return;
    const text = cmd.textContent;
    cmd.textContent = '';
    cmd.style.borderRight = '2px solid var(--accent)';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            cmd.textContent += text[i++];
            setTimeout(type, 40 + Math.random() * 60);
        } else {
            setTimeout(() => cmd.style.borderRight = 'none', 1000);
        }
    };
    setTimeout(type, 600);
});
