import { useRef, useState, useEffect, Fragment } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const { t } = useLanguage();

    const translatedProjects = Array.isArray(t('projects.items')) ? t('projects.items') : [];

    const projectsData = [
        {
            id: 1,
            title: translatedProjects[0]?.title || "Yalla Store",
            tech: [
                { name: "Next.js 15", icon: "fab fa-react", color: "#ffffff" },
                { name: "Tailwind v4", icon: "fas fa-wind", color: "#06B6D4" },
                { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
                { name: "Zustand", icon: "fas fa-cogs", color: "#F7DF1E" },
                { name: "OpenAI", icon: "fas fa-robot", color: "#10A37F" }
            ],
            desc: translatedProjects[0]?.desc || "Sistem e-commerce berskala besar (Enterprise-Grade) yang mengusung performa tinggi dan keamanan tingkat mutakhir. Menggunakan Server Actions untuk eksekusi sisi server yang aman, dikombinasikan dengan Drizzle ORM (Type-Safe) dan manajemen state ringan dari Zustand. Ini adalah solusi bisnis end-to-end yang menjamin transaksi cepat dan andal.",
            features: translatedProjects[0]?.features || ["Sistem Autentikasi Super Aman dengan Better Auth", "Optimasi Gambar Cloudinary & Validasi Zod", "Arsitektur Fullstack modern siap produksi"],
            images: ["yallastore-1.png", "yallastore-2.png", "yallastore-3.png", "yallastore-4.png", "yallastore-5.png", "yallastore-6.png"],
            layout: "vertical",
            link: "https://yallastore.my.id"
        },
        {
            id: 2,
            title: translatedProjects[1]?.title || "Amar Rental Mobil",
            tech: [
                { name: "Next.js App Router", icon: "fab fa-react", color: "#ffffff" },
                { name: "Laravel", icon: "fab fa-laravel", color: "#FF2D20" },
                { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
                { name: "n8n Automation", icon: "fas fa-bolt", color: "#EA4B71" }
            ],
            desc: translatedProjects[1]?.desc || "Platform enterprise dengan arsitektur terpisah (Decoupled Client-Server). Frontend dibangun secara khusus demi mencapai optimasi SEO (Search Engine Optimization) sempurna dan interaksi kilat. Didukung oleh Backend Laravel yang kokoh dengan proteksi keamanan API kelas atas (Sanctum Token), sistem ini siap menangani lonjakan transaksi dengan latensi minimal.",
            features: translatedProjects[1]?.features || ["RESTful API Integration dengan perlindungan CORS", "Graceful Degradation untuk stabilitas saat sinyal lemah", "SQL Injection Protection & Security Headers"],
            images: ["amarrental-1.png", "amarrental-2.png", "amarrental-3.png", "amarrental-4.png", "amarrental-5.png", "amarrental-6.png"],
            layout: "vertical",
            link: "https://amar-rental.my.id"
        },
        {
            id: 3,
            title: translatedProjects[2]?.title || "Tournament Piala Dunia 2026",
            tech: [
                { name: "Vanilla JS", icon: "fab fa-js", color: "#F7DF1E" },
                { name: "REST API", icon: "fas fa-network-wired", color: "#009688" },
                { name: "HTML/CSS", icon: "fab fa-html5", color: "#E34F26" }
            ],
            desc: translatedProjects[2]?.desc || "Aplikasi web interaktif berdesain Luxury Gold Sports UI. Dirancang dengan fokus pada efisiensi pemrosesan data, platform ini mampu menarik dan memperbarui statistik dari server (API eksternal) secara real-time dan asinkron tanpa membebani browser. Sebuah demonstrasi keahlian manipulasi DOM tingkat lanjut untuk menghadirkan pengalaman pengguna yang instan tanpa jeda pemuatan.",
            features: translatedProjects[2]?.features || ["Seamless Video Transition Loading System", "Live Data Polling & Auto-Update Mechanisms", "Sistem Kuis Interaktif berbasis DOM kilat"],
            images: ["vivamustofa-1.png", "vivamustofa-2.png", "vivamustofa-3.png", "vivamustofa-4.png"],
            link: "https://vivamustofa.my.id"
        },
        {
            id: 4,
            title: translatedProjects[3]?.title || "Kylian Mbappe Profil",
            tech: [
                { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
                { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
                { name: "Vanilla JS", icon: "fab fa-js", color: "#F7DF1E" }
            ],
            desc: translatedProjects[3]?.desc || "Sebuah mahakarya landing page interaktif dengan performa maksimal. Dibangun murni tanpa mengandalkan framework berat, menghasilkan waktu muat (load time) instan dan pengalaman pengguna yang luar biasa mulus. Desain ini menerapkan estetika Glassmorphism premium yang memberikan sentuhan visual eksklusif, dirancang khusus untuk meningkatkan konversi dan merepresentasikan brand berkelas internasional.",
            features: translatedProjects[3]?.features || ["Zero-Dependency Architecture untuk performa 100%", "Animasi Micro-Interactions manual yang elegan", "Pixel-Perfect Responsive Design"],
            images: ["mbappe-1.png", "mbappe-2.png", "mbappe-3.png", "mbappe-4.png"],
            link: "https://mustofaalatasss.github.io/CV-Mbappe/"
        },
        {
            id: 5,
            title: translatedProjects[4]?.title || "Fanbase Rockstar",
            tech: [
                { name: "React 19", icon: "fab fa-react", color: "#61DAFB" },
                { name: "TypeScript", icon: "fas fa-code", color: "#3178C6" },
                { name: "GSAP", icon: "fas fa-magic", color: "#88CE02" },
                { name: "Vanilla CSS", icon: "fab fa-css3-alt", color: "#1572B6" }
            ],
            desc: translatedProjects[4]?.desc || "Platform komunitas dengan arsitektur berkinerja tinggi. Proyek ini mendemonstrasikan keahlian tingkat lanjut dalam merancang animasi modern (GSAP) untuk menciptakan efek Scroll-Scrubbing sinematik, memberikan impresi visual mendalam layaknya sebuah video game AAA. Sangat cocok untuk campaign pemasaran yang membutuhkan interaksi pengguna tingkat tinggi.",
            features: translatedProjects[4]?.features || ["Advanced DOM Masking & Radial Reveal Effects", "React Hook teroptimasi untuk stabilitas 60 FPS", "Arsitektur UI modular dan sangat scalable"],
            images: ["rockstar-1.png", "rockstar-2.png", "rockstar-3.png", "rockstar-4.png"],
            link: "https://fanbaserockstar.web.id"
        },
        {
            id: 6,
            title: translatedProjects[5]?.title || "Joka Joki - VIP E-Sports Management System",
            tech: [
                { name: "Next.js 15", icon: "fab fa-react", color: "#ffffff" },
                { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
                { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
                { name: "Prisma ORM", icon: "fas fa-database", color: "#5A67D8" },
                { name: "TypeScript", icon: "fas fa-code", color: "#3178C6" }
            ],
            desc: translatedProjects[5]?.desc || "Sebuah sistem manajemen operasional skala Enterprise yang dibangun untuk Agensi Game Boosting & E-Sports Coaching profesional. Web aplikasi Full-stack ini menyederhanakan seluruh alur bisnis, dilengkapi dengan sistem pelacakan antrean pesanan (live queue), pemrosesan order, dan Dashboard Admin komprehensif untuk mengelola klien dan transaksi harian. Dirancang dengan arsitektur tangguh untuk menjamin privasi data, keamanan tingkat tinggi, dan performa super cepat",
            features: translatedProjects[5]?.features || ["Sistem Manajemen Antrean (Queue System) Terstruktur", "Dashboard Admin Komprehensif (Manajemen Pelanggan & Riwayat Order)", "Arsitektur Database Type-Safe yang Aman dengan Prisma ORM", "Optimasi SEO Mendalam (Search Engine Optimized)", "Desain UI/UX Premium yang Responsif di Semua Perangkat"],
            images: ["jokajoki-1.png", "jokajoki-2.png", "jokajoki-3.png", "jokajoki-4.png"],
            layout: "vertical",
            link: "https://jokajoki.my.id/"
        }
    ];

    const container = useRef(null);
    const timelineRef = useRef(null);
    const numbersRef = useRef(null);

    // Modal State
    const [activeProject, setActiveProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Lightbox State
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useGSAP(() => {
        // Fade in title
        gsap.fromTo('.gsap-slide-up',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            }
        );

        // Horizontal Scroll Animation
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            const timeline = timelineRef.current;
            const cards = gsap.utils.toArray('.project-card');
            const numbers = numbersRef.current ? gsap.utils.toArray('.huge-number', numbersRef.current) : [];

            if (timeline && cards.length > 0) {
                // Set initial state for numbers
                if (numbers.length > 0) {
                    gsap.set(numbers, { y: 100, opacity: 0, position: 'absolute' });
                    gsap.set(numbers[0], { y: 0, opacity: 1 });
                }

                // Set initial active index
                if (timelineRef.current) {
                    timelineRef.current.dataset.activeIndex = 0;
                }

                // Function to get the dynamic scroll distance
                const getScrollAmount = () => {
                    const wrapperWidth = timeline.parentElement.offsetWidth;
                    return timeline.scrollWidth - wrapperWidth;
                };

                gsap.to(timeline, {
                    x: () => -getScrollAmount(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: container.current,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        end: () => "+=" + getScrollAmount(),
                        onUpdate: (self) => {
                            if (!numbers.length) return;

                            const progress = self.progress;
                            const scrollX = progress * getScrollAmount();
                            const wrapperWidth = timeline.parentElement.offsetWidth;
                            const viewportCenter = scrollX + (wrapperWidth / 2);

                            let activeIndex = 0;
                            let minDistance = Infinity;

                            cards.forEach((card, i) => {
                                const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
                                const distance = Math.abs(cardCenter - viewportCenter);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    activeIndex = i;
                                }
                            });

                            const prevIndex = parseInt(timelineRef.current.dataset.activeIndex || 0);

                            if (prevIndex !== activeIndex) {
                                timelineRef.current.dataset.activeIndex = activeIndex;

                                // Determine direction of scroll
                                const isScrollingDown = activeIndex > prevIndex;

                                // Animate out previous
                                gsap.to(numbers[prevIndex], {
                                    y: isScrollingDown ? -100 : 100,
                                    opacity: 0,
                                    duration: 0.6,
                                    ease: 'power3.inOut'
                                });

                                // Animate in current
                                gsap.fromTo(numbers[activeIndex],
                                    { y: isScrollingDown ? 100 : -100, opacity: 0 },
                                    { y: 0, opacity: 1, duration: 0.6, ease: 'power3.inOut' }
                                );
                            }
                        }
                    }
                });
            }
        }
    }, { scope: container });

    // Handle Keyboard Navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    const openModal = (project) => {
        setActiveProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setActiveProject(null), 300); // Wait for transition
        document.body.style.overflow = 'auto';
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = () => {
        if (!activeProject) return;
        setLightboxIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        if (!activeProject) return;
        setLightboxIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
    };

    return (
        <section id="projects" className="projects" ref={container}>
            <div className="projects-split-layout">
                <div className="projects-left">
                    <div className="projects-header">
                        <h2 className="section-title gsap-slide-up" style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{t('projects.title')}</h2>
                        <p className="section-subtitle gsap-fade-up" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '80%', lineHeight: '1.6' }}>
                            {t('projects.desc')}
                        </p>
                    </div>
                    <div className="huge-numbers-container" ref={numbersRef}>
                        {projectsData.map((project, idx) => (
                            <div key={project.id} className="huge-number">
                                0{idx + 1}.
                            </div>
                        ))}
                    </div>
                </div>

                <div className="projects-right">
                    <div className="project-timeline-wrapper">
                        <div className="project-timeline" ref={timelineRef}>
                            {projectsData.map((project) => (
                                <div className="project-card gsap-project" key={project.id} onClick={() => openModal(project)}>
                                    <div className="project-image">
                                        <img
                                            src={`/images/${project.images[0]}`}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.co/1200x800/1a1a24/e5a93d?text=Taruh+${project.images[0]}+di+public/images`;
                                            }}
                                        />
                                        <div className="project-overlay">
                                            <h3>{project.title}</h3>
                                            <button className="btn-icon"><i className="fas fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && createPortal(
                <div className={`project-modal-overlay active`} onClick={() => {
                    if (lightboxIndex === null) closeModal(); // Only close modal if lightbox is not active
                }}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()} data-lenis-prevent="true">
                        <button className="modal-close" onClick={closeModal}>
                            <i className="fas fa-times"></i> CLOSE
                        </button>

                        {activeProject && (
                            <div className="modal-inner">
                                <div className="modal-header">
                                    <div className="modal-title-area">
                                        <h2>{activeProject.title}</h2>
                                        <div className="modal-tech-stack">
                                            {activeProject.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="tech-badge"
                                                    style={{
                                                        color: t.color === '#ffffff' ? 'var(--text-main)' : t.color,
                                                        backgroundColor: t.color === '#ffffff' ? 'color-mix(in srgb, var(--text-main) 15%, transparent)' : `${t.color}15`,
                                                        borderColor: t.color === '#ffffff' ? 'color-mix(in srgb, var(--text-main) 40%, transparent)' : `${t.color}40`
                                                    }}
                                                >
                                                    <i className={t.icon}></i> {t.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {activeProject.link && (
                                        <a href={activeProject.link} target="_blank" rel="noreferrer" className="btn btn-primary modal-header-link">
                                            {t('projects.visit_website')} <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    )}
                                </div>

                                <div className="modal-body">
                                    <div className="modal-details">
                                        <div className="detail-section">
                                            <h4>{t('projects.modal_desc_title')}</h4>
                                            <p>{activeProject.desc}</p>
                                        </div>

                                        <div className="detail-section">
                                            <h4>{t('projects.modal_features_title')}</h4>
                                            <ul className="feature-list">
                                                {activeProject.features.map((feature, i) => (
                                                    <li key={i}><i className="fas fa-check-circle"></i> {feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={`modal-gallery ${activeProject.layout === 'vertical' ? 'vertical' : ''}`}>
                                        {activeProject.images.map((imgSrc, idx) => (
                                            <Fragment key={idx}>
                                                {activeProject.layout === 'vertical' && idx === 4 && (
                                                    <h3 className="admin-section-title">{t('projects.modal_admin_title')}</h3>
                                                )}
                                                <div
                                                    className={`gallery-item ${activeProject.layout !== 'vertical' && idx === 0 ? 'featured' : ''}`}
                                                    onClick={() => openLightbox(idx)}
                                                >
                                                    <div className="zoom-hint"><i className="fas fa-search-plus"></i></div>
                                                    <img
                                                        src={`/images/${imgSrc}`}
                                                        alt={`${activeProject.title} screenshot ${idx + 1}`}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `https://placehold.co/1200x800/1a1a24/e5a93d?text=Taruh+${imgSrc}+di+public/images`;
                                                        }}
                                                    />
                                                </div>
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}

            {/* Fullscreen Lightbox Overlay */}
            {lightboxIndex !== null && activeProject && createPortal(
                <div className="lightbox-overlay active">
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <i className="fas fa-times"></i>
                    </button>

                    <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="lightbox-content">
                        <img
                            src={`/images/${activeProject.images[lightboxIndex]}`}
                            alt={`${activeProject.title} fullscreen`}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/1920x1080/1a1a24/e5a93d?text=Taruh+${activeProject.images[lightboxIndex]}+di+public/images`;
                            }}
                        />
                        <div className="lightbox-counter">
                            {lightboxIndex + 1} / {activeProject.images.length}
                        </div>
                    </div>

                    <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Projects;
