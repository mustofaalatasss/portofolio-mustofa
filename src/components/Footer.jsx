import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Mustofa Alatas. {t('footer.allRightsReserved')}. {t('footer.craftedWith')} <i className="fas fa-heart highlight"></i> {t('footer.andCleanCode')}.</p>
        </footer>
    );
};

export default Footer;
