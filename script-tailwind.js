// ================================
// Mobile Navigation
// ================================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const line1 = document.getElementById('menu-line-1');
const line2 = document.getElementById('menu-line-2');
const line3 = document.getElementById('menu-line-3');

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener('click', () => {

        const isOpen =
            menuToggle.getAttribute('aria-expanded') === 'true';

        if (!isOpen) {

            // Open menu
            mobileMenu.classList.remove('hidden');

            menuToggle.setAttribute('aria-expanded', 'true');

            line1.classList.add(
                'translate-y-[7px]',
                'rotate-45'
            );

            line2.classList.add('opacity-0');

            line3.classList.add(
                '-translate-y-[7px]',
                '-rotate-45'
            );

        } else {

            // Close menu
            mobileMenu.classList.add('hidden');

            menuToggle.setAttribute('aria-expanded', 'false');

            line1.classList.remove(
                'translate-y-[7px]',
                'rotate-45'
            );

            line2.classList.remove('opacity-0');

            line3.classList.remove(
                '-translate-y-[7px]',
                '-rotate-45'
            );
        }

    });


    // Close mobile menu when a navigation link is clicked

    document.querySelectorAll('.mobile-link').forEach(link => {

        link.addEventListener('click', () => {

            mobileMenu.classList.add('hidden');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

            line1.classList.remove(
                'translate-y-[7px]',
                'rotate-45'
            );

            line2.classList.remove('opacity-0');

            line3.classList.remove(
                '-translate-y-[7px]',
                '-rotate-45'
            );

        });

    });

}


// ================================
// Spring Cursor Lag
// ================================

const dot = document.getElementById('springdot');

let mx = 0;
let my = 0;

let dx = 0;
let dy = 0;


if (dot) {

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


    // ================================
    // Cursor Hover Effect
    // ================================

    document.querySelectorAll('a, button').forEach(el => {

        el.addEventListener('mouseenter', () => {

            dot.style.width = '40px';
            dot.style.height = '40px';
            dot.style.background =
                'rgba(0,89,226,.18)';

        });


        el.addEventListener('mouseleave', () => {

            dot.style.width = '22px';
            dot.style.height = '22px';
            dot.style.background = 'transparent';

        });

    });

}


// ================================
// Scroll Reveals
// ================================

const io = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    'opacity-100',
                    'translate-y-0'
                );

                io.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll('.reveal').forEach(el => {

    io.observe(el);

});


// ================================
// Reduced Motion
// ================================

if (
    window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches
) {

    document.querySelectorAll('.reveal').forEach(el => {

        el.classList.add(
            'opacity-100',
            'translate-y-0'
        );

    });


    if (dot) {
        dot.style.display = 'none';
    }

}