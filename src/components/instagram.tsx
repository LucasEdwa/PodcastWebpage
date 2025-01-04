import { SocialIcon } from 'react-social-icons';
import podcast from '../podcast.jpeg';
import { useTranslation } from 'react-i18next';

export const Instagram = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-custom-gradient transition-500 w-full   text-black flex flex-cols items-center">
      <div className="container mx-auto p-12 text-center">
        <h1 className="text-2xl font-bold text-left" dangerouslySetInnerHTML={{ __html: t('instagram_title') }}></h1>
        <p className="text-md mt-4">{t('instagram_description')}</p>
      </div>
      <div className="flex flex-col gap-5 p-9 items-center">
        <img src={podcast} alt="Economia" className="w-[150px] h-[86px] object-cover rounded-full" />
        <SocialIcon url="https://www.instagram.com/economiaparatodas/" />
      </div>
    </div>
  );
};