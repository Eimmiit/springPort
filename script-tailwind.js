// Spring cursor lag
const dot = document.getElementById('springdot');

let mx = 0, my = 0;
let dx = 0, dy = 0;

window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
});

function loop() {
    dx += (mx - dx) * 0.18;
    dy += (my - dy) * 0.18;

    dot.style.left = dx + 'px';
    dot.style.top = dy + 'px';

    requestAnimationFrame(loop);
}

loop();


// Cursor hover effect
document.querySelectorAll('a,button').forEach(el => {

    el.addEventListener('mouseenter', () => {
        dot.style.width = '40px';
        dot.style.height = '40px';
        dot.style.background = 'rgba(0,89,226,.18)';
    });

    el.addEventListener('mouseleave', () => {
        dot.style.width = '22px';
        dot.style.height = '22px';
        dot.style.background = 'transparent';
    });

});


// Scroll reveals
const io = new IntersectionObserver((entries) => {

    entries.forEach(e => {

        if (e.isIntersecting) {

            e.target.classList.add(
                'opacity-100',
                'translate-y-0'
            );

            io.unobserve(e.target);
        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll('.reveal').forEach(el => {
    io.observe(el);
});


// Reduced motion respect
if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {

    document.querySelectorAll('.reveal').forEach(el => {

        el.classList.add(
            'opacity-100',
            'translate-y-0'
        );

    });

    dot.style.display = 'none';
}