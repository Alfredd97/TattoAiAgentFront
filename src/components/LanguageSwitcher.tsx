import React from 'react';
import { useTranslation } from 'react-i18next';


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
                        src="/src/assets/images/en.svg" // Replace with the actual path to your English flag icon
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
                        src="/src/assets/images/es.svg" // Replace with the actual path to your Spanish flag icon
                        alt="Español"
                        className="flag-icon"
                    />
                </div>
            </button>
        </div>
    );
};

export default LanguageSwitcher;