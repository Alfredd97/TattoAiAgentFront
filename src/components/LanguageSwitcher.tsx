import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/images/en.svg';
import esFlag from '../assets/images/es.svg';


const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-container">
            <button
                className={`language-button ${i18n.language === 'en' ? 'selected' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                <div className="flag-container">
                    <img
                        src={enFlag}
                        alt="English"
                        className="flag-icon"
                    />
                </div>
            </button>
            <button
                className={`language-button ${i18n.language === 'es' ? 'selected' : ''}`}
                onClick={() => changeLanguage('es')}
            >
                <div className="flag-container">
                    <img
                        src={esFlag}
                        alt="Español"
                        className="flag-icon"
                    />
                </div>
            </button>
        </div>
    );
};

export default LanguageSwitcher;