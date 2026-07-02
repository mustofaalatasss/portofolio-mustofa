import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from './SplitText';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ isAppLoaded }) => {
    const container = useRef(null);
    const videoRef = useRef(null);
    const { t } = useLanguage();
    const [titlePhase, setTitlePhase] = useState('name');

    const tl = useRef(null);

    // Animasi GSAP
    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
        
        tl.current.fromTo(".hero-title-wrapper", 
            { x: -50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, delay: 0.5 }
        )
        .fromTo(".hero-right", 
            { x: 50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1 }, 
            "-=0.8"
        )
        .fromTo(".hero-socials",
            { xPercent: -50, y: 20, opacity: 0 },
            { xPercent: -50, y: 0, opacity: 1, duration: 1 },
            "-=0.8"
        )
        .fromTo(".scroll-indicator",
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            "-=0.2"
        );
    }, { scope: container });

    useEffect(() => {
        if (isAppLoaded && tl.current) {
            tl.current.play();
        }
    }, [isAppLoaded]);

    // Logika pembatasan durasi video ke 10 detik dan mengganti teks
    useEffect(() => {
        if (!isAppLoaded) return;

        const video = videoRef.current;
        if (!video) return;

        video.play().catch(e => console.log("Autoplay prevented:", e));

        const handleTimeUpdate = () => {
            if (video.currentTime >= 4.5 && titlePhase === 'name') {
                setTitlePhase('role');
            }
            if (video.currentTime >= 10) {
                video.pause(); // Berhenti (pause) di detik ke-10
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [titlePhase, isAppLoaded]);

    return (
        <section id="home" className="hero" ref={container}>
            <div className="video-container">
                <video 
                    ref={videoRef}
                    muted 
                    playsInline 
                    className="bg-video"
                >
                    <source src="/assets/loading screen mustofa.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
            
            <div className="hero-content-new">
                <div className="hero-title-wrapper">
                    <h1 className="hero-title-big" key={titlePhase}>
                        {titlePhase === 'name' ? (
                            <>
                                <span className="text-accent">
                                    <SplitText text="Mustofa" type="chars" delay={0.5} />
                                </span><br />
                                <SplitText text="Alatas" type="chars" delay={0.7} />
                            </>
                        ) : (
                            <>
                                <span className="text-accent">
                                    <SplitText text={t('hero.role_first')} type="chars" delay={0} />
                                </span><br />
                                <SplitText text={t('hero.role_second')} type="chars" delay={0.2} />
                            </>
                        )}
                    </h1>
                    <div className="hero-accent-line"></div>
                </div>
                
                <div className="hero-socials">
                    <a href="https://www.instagram.com/mustofaalatas_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:mustofaalatasss@gmail.com" title="Kirim Email"><i className="fas fa-envelope"></i></a>
                </div>
                
                <div className="hero-right">
                    <p className="intro-label">~ {t('hero.intro_label')}</p>
                    <h3 className="intro-heading">
                        <SplitText text={t('hero.intro_heading')} type="words" delay={0.9} />
                    </h3>
                    <p className="intro-text">
                        {t('hero.intro_text')}
                    </p>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <span>{t('hero.scroll_down')}</span>
                <i className="fas fa-chevron-down animated-bounce"></i>
            </div>
        </section>
    );
};

export default Hero;
