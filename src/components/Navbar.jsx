import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ theme, toggleTheme }) => {
    const { language, changeLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

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

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };


    return (
        <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">Mustofa <span className="highlight">Alatas</span></div>
            
            <nav className="navbar-dock">
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
        </header>
    );
};

export default Navbar;
