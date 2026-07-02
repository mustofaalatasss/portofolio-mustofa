import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useLanguage();
    const container = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    useGSAP(() => {
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

        gsap.fromTo(".about-visual",
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
        // Scrub reveal for vision texts
        gsap.utils.toArray('.scrub-reveal').forEach((el) => {
            gsap.fromTo(el, 
                { opacity: 0.1, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    }
                }
            );
        });

    }, { scope: container });

    return (
        <section id="about" className="about" ref={container} style={{ backgroundColor: 'var(--bg-color)', padding: '8rem 0' }}>
            <div style={{ padding: '0 5%', width: '100%', maxWidth: '1800px', margin: '0 auto' }}>
                <h2 className="section-title gsap-slide-up" style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>{t('about.title')}</h2>
                <h3 className="gsap-slide-up" style={{ 
                    textAlign: 'left', 
                    margin: '1.5rem 0 5rem 0', 
                    maxWidth: '850px',
                    fontSize: '2.2rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    lineHeight: '1.4',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.5px'
                }}>
                    <span style={{ color: 'var(--accent-color)' }}>{t('about.vision_highlight')}</span> {t('about.vision_desc')}
                </h3>
                
                {/* Atas: Foto & Teks */}
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '500px 1fr', gap: '5rem', alignItems: 'flex-start', marginBottom: '5rem' }}>
                    {/* Photo Section - Lebih Besar */}
                    <div className="about-visual">
                        <div className="profile-image-container" style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '3px solid var(--accent-color)', borderRadius: '25px', zIndex: 0 }}></div>
                            
                            {/* Interaktif Wrapper */}
                            <div 
                                style={{ position: 'relative', zIndex: 1, cursor: 'crosshair', borderRadius: '25px', overflow: 'hidden', boxShadow: 'var(--card-shadow-hover)', transition: 'box-shadow 0.5s ease' }}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {/* Base Image (Slightly Darkened) */}
                                <img 
                                    src="/images/about me.jpeg" 
                                    alt="Mustofa Alatas" 
                                    className="profile-photo"
                                    style={{ 
                                        width: '100%', height: '650px', objectFit: 'cover', display: 'block',
                                        filter: 'var(--about-img-filter)',
                                        transition: 'filter 0.5s ease'
                                    }}
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = "https://placehold.co/600x750/1a1a24/e5a93d?text=FOTO+ANDA+DI+SINI"; 
                                    }}
                                />

                                {/* Spotlight Overlay (Bright Image with Mask) */}
                                <img 
                                    src="/images/about me.jpeg" 
                                    alt="Mustofa Alatas Spotlight" 
                                    style={{ 
                                        position: 'absolute', top: 0, left: 0,
                                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                                        opacity: isHovering ? 1 : 0,
                                        transition: 'opacity 0.4s ease',
                                        pointerEvents: 'none',
                                        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`,
                                        maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`
                                    }}
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = "https://placehold.co/600x750/1a1a24/e5a93d?text=FOTO+ANDA+DI+SINI"; 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="about-text">
                        <h3 style={{ fontSize: '3rem', marginTop: 0, marginBottom: '2rem', lineHeight: '1.2' }}>
                            <SplitText text={t('about.problem_solver')} type="words" delay={0.2} />
                        </h3>
                        <div className="vision-text-container">
                            <p className="vision-text scrub-reveal" dangerouslySetInnerHTML={{ __html: t('about.vision_text_1') }}></p>
                            <p className="vision-text scrub-reveal" dangerouslySetInnerHTML={{ __html: t('about.vision_text_2') }}></p>
                            <p className="vision-text scrub-reveal" dangerouslySetInnerHTML={{ __html: t('about.vision_text_3') }}></p>
                        </div>
                    </div>
                </div>

                {/* Bawah: Ikon Memanjang Layar (4 Kolom) */}
                <div className="gsap-slide-up" style={{ marginTop: '5rem', marginBottom: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
                    <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-code)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t('about.competitive_edge')}</p>
                    <h3 style={{ 
                        fontSize: '3.5rem', 
                        fontFamily: 'var(--font-heading)', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '-1px',
                        color: 'var(--text-main)',
                        margin: 0
                    }}>
                        {t('about.why_me')}
                    </h3>
                </div>
                <div className="core-values gsap-slide-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    <div className="value-card glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <i className="fas fa-brain" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h4 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{t('about.skill1_title')}</h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.6' }}>{t('about.skill1_desc')}</p>
                    </div>
                    
                    <div className="value-card glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <i className="fas fa-handshake" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h4 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{t('about.skill2_title')}</h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.6' }}>{t('about.skill2_desc')}</p>
                    </div>
                    
                    <div className="value-card glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <i className="fas fa-rocket" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h4 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{t('about.skill3_title')}</h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.6' }}>{t('about.skill3_desc')}</p>
                    </div>
                    
                    <div className="value-card glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <i className="fas fa-clock" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h4 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{t('about.skill4_title')}</h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.6' }}>{t('about.skill4_desc')}</p>
                    </div>
                    
                    <div className="value-card glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h4 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{t('about.skill5_title')}</h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.6' }}>{t('about.skill5_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
