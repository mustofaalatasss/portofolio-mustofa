import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('id');

    useEffect(() => {
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang && translations[savedLang]) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
            localStorage.setItem('app_lang', lang);
        }
    };

    const t = (key, props = {}) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                let fallback = translations['id'];
                for (const f of keys) {
                    if (fallback && fallback[f] !== undefined) {
                        fallback = fallback[f];
                    } else {
                        return key;
                    }
                }
                value = fallback;
                break;
            }
        }
        
        if (typeof value === 'function') {
            return value(props);
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
