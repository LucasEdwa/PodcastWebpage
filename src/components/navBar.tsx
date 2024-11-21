import { useState } from 'react';

export const NavBar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => { 
    setIsOpen(false);
  }
  return (
    <div className='bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#b797cc] transition duration-500 shadow-2xl border-b-2'>
      <button onClick={toggleMenu} className="text-gray-900 focus:outline-none lg:hidden p-8 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav className={`fixed inset-y-0 left-0 transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#d9c5e6]  text-white w-64 z-40`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 text-sm ">
          <a href="/" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf]">Inicio</a>
          <a href="/about" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3]">Sobre o Economia para todas</a>
          <a href="" onClick={() => { onContactClick(); handleLinkClick(); }} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3]">Entre em contato</a>
        </div>
      </nav>
    </div>
  );
};