import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".gsap-slide-up",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".gsap-slide-up",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: container });

    return (
        <section id="contact" className="contact" ref={container} style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p className="gsap-slide-up" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-code)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 'bold' }}>// {t('contact.tagline')}</p>
                    <h2 className="gsap-slide-up" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '-1px',
                        color: 'var(--text-main)',
                        margin: '0 0 1.5rem 0',
                        lineHeight: '1.1'
                    }}>
                        {t('contact.title')}
                    </h2>
                    <p className="gsap-slide-up" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        {t('contact.desc')}
                    </p>
                </div>

                <div className="contact-grid gsap-slide-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Email Card (Clickable) */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mustofaalatasss@gmail.com" target="_blank" rel="noopener noreferrer" className="value-card glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
                        <i className="fas fa-envelope" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '1.5rem' }}>{t('contact.email')}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>mustofaalatasss@gmail.com</p>
                    </a>

                    {/* WhatsApp Card (Clickable) */}
                    <a href="https://wa.me/6287868036735" target="_blank" rel="noopener noreferrer" className="value-card glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
                        <i className="fab fa-whatsapp" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '1.5rem' }}>{t('contact.wa')}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>+62 878-6803-6735</p>
                    </a>

                    {/* Location Card */}
                    <div className="value-card glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '1.5rem' }}>{t('contact.location')}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.4' }}>{t('contact.jakarta')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
