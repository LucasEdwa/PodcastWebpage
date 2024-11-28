import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex gap-2 p-1 w-full text-white items-center'>
      <div className="items-center py-1 mt-1">
        <h6 className='text-center text-xs'>Change language:</h6>
      </div>
      <button
        className={`hover:text-purple-950 ${i18n.language === 'en' ? 'text-purple-950' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        🇺🇸
      </button>
      <button
        className={`hover:text-purple-950 ${i18n.language === 'es' ? 'text-purple-950' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        🇪🇸
      </button>
      <button
        className={`hover:text-purple-950 ${i18n.language === 'sv' ? 'text-purple-950' : ''}`}
        onClick={() => changeLanguage('sv')}
      >
        🇸🇪
      </button>
      <button
        className={`hover:text-purple-950 ${i18n.language === 'pt' ? 'text-purple-950' : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        🇧🇷
      </button>
    </div>
  );
};

export default LanguageSwitcher;