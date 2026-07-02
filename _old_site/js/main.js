document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero Section Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".tagline-sub", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    )
    .fromTo(".tagline-main", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.6"
    )
    .fromTo(".tagline-desc", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.6"
    )
    .fromTo(".hero-buttons .btn", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, 
        "-=0.4"
    )
    .fromTo(".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.2"
    );

    // Common Scroll Animations
    const slideUpElements = gsap.utils.toArray('.gsap-slide-up');
    slideUpElements.forEach(el => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    gsap.fromTo(".about-text",
        { x: -50, opacity: 0 },
        {
            x: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: ".about-grid",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".about-visual",
        { x: 50, opacity: 0 },
        {
            x: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: ".about-grid",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Project Cards Staggered Reveal
    const projects = gsap.utils.toArray('.gsap-project');
    projects.forEach((proj, i) => {
        gsap.fromTo(proj,
            { y: 100, opacity: 0 },
            {
                y: 0, 
                opacity: 1, 
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: proj,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
