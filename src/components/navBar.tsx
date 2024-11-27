import { useState } from 'react';
import { Link } from 'react-router-dom';
import podcast from '../podcast.jpeg';
import { useTranslation } from 'react-i18next';

export const NavBar =() => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => { 
    setIsOpen(false);
  }
  return (
    <div className='bg-custom-gradient transition-500 shadow-2xl border-b-2'>
      <button onClick={toggleMenu} className="text-gray-900 focus:outline-none lg:hidden p-8 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav className={`fixed inset-y-0 left-0 transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#d9c5e6]  text-white w-64 z-40`}>
        <div className="flex items-center justify-between p-4">
          <img src={podcast} alt="Economia" className="w-[50px] h-[50px] object-cover rounded-full" />
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 text-sm ">
          <Link to="/" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf]">{t('nav_home')}</Link>
          <Link to="/about" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3]">{t('nav_about')}</Link>
        </div>
      </nav>
    </div>
  );
};