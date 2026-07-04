import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ theme, toggleTheme }) => {
    const { language, changeLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">Mustofa <span className="highlight">Alatas</span></div>
            
            {/* Desktop Navigation */}
            <nav className="navbar-dock desktop-only">
                <Magnetic>
                    <div className="nav-logo-circle">
                        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '1.4rem' }}>M</span>
                    </div>
                </Magnetic>
                <ul className="nav-links-dock">
                    <Magnetic><li><a href="#home">{t('nav.home')}</a></li></Magnetic>
                    <Magnetic><li><a href="#projects">{t('nav.portfolio')}</a></li></Magnetic>
                    <Magnetic><li><a href="#about">{t('nav.about')}</a></li></Magnetic>
                    <Magnetic><li><a href="#contact">{t('nav.contact')}</a></li></Magnetic>
                    <Magnetic>
                        <li className="theme-toggle-dock">
                            <button onClick={toggleTheme} aria-label="Toggle Theme" title="Ubah Tema (Gelap/Terang)">
                                <i className="fas fa-circle-half-stroke" style={{ transform: 'rotate(180deg)' }}></i>
                            </button>
                        </li>
                    </Magnetic>
                    <Magnetic>
                        <li className="lang-toggle-dock">
                            <select onChange={handleLanguageChange} value={language} title="Change Language">
                                <option value="id">Indonesia</option>
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                                <option value="zh-CN">中文</option>
                                <option value="ja">日本語</option>
                                <option value="es">Español</option>
                            </select>
                        </li>
                    </Magnetic>
                </ul>
                
                <Magnetic>
                    <a href="#contact" className="nav-pill-btn">
                        <i className="far fa-envelope"></i> {t('nav.btn_contact')}
                    </a>
                </Magnetic>
            </nav>

            {/* Mobile Hamburger Button */}
            <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            {/* Mobile Overlay Menu */}
            <div className={`mobile-overlay-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-links">
                        <li><a href="#home" onClick={closeMobileMenu}>{t('nav.home')}</a></li>
                        <li><a href="#projects" onClick={closeMobileMenu}>{t('nav.portfolio')}</a></li>
                        <li><a href="#about" onClick={closeMobileMenu}>{t('nav.about')}</a></li>
                        <li><a href="#contact" onClick={closeMobileMenu}>{t('nav.contact')}</a></li>
                    </ul>
                    
                    <div className="mobile-menu-controls">
                        <button className="mobile-theme-toggle" onClick={toggleTheme}>
                            <i className="fas fa-circle-half-stroke"></i> Tema Gelap/Terang
                        </button>
                        
                        <select className="mobile-lang-select" onChange={(e) => { handleLanguageChange(e); closeMobileMenu(); }} value={language}>
                            <option value="id">🇮🇩 Indonesia</option>
                            <option value="en">🇬🇧 English</option>
                            <option value="ar">🇸🇦 العربية</option>
                            <option value="zh-CN">🇨🇳 中文</option>
                            <option value="ja">🇯🇵 日本語</option>
                            <option value="es">🇪🇸 Español</option>
                        </select>
                    </div>

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%', maxWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} onClick={closeMobileMenu}>
                        <i className="far fa-envelope"></i> {t('nav.btn_contact')}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
