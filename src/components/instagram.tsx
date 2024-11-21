import { SocialIcon } from 'react-social-icons';
import podcast from '../podcast.jpeg';
export const Instagram = () => {
  return (
    <div className="bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#d5bae6] transition duration-500  w-full text-white flex flex-cols items-center">
      <div className="container mx-auto p-12 text-center">
        <h1 className="text-4xl font-bold text-left"><span className='italic text-2xl'>Instagram</span> <br></br> Economia para todas</h1>
        <p className="text-xl mt-4">Advogada brasileira formada na Suécia, especializada em direito financeiro e criadora do Podcas Economia para Todas </p>
      </div>
      <div className="flex flex-col gap-5 p-9 items-center">
        <img src={podcast} alt="Economia" className="w-[9rem] h-[6rem] object-cover rounded-full" />
        <SocialIcon url="https://www.instagram.com/economiaparatodas/" />
        
      </div>
    </div>
  );
};