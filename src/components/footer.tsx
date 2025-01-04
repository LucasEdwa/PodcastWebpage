import { SocialIcon } from "react-social-icons";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-custom-gradient transition-500 bottom-0 w-full text-black">
      <div className="p-1 text-center">
        <h1 className="text-4xl font-bold">{t('footer_title')}</h1>
        <p className="text-xl mt-4">{t('footer_description')}</p>
      </div>
      <div className="flex gap-5 p-9 items-center">
        <SocialIcon url="https://www.instagram.com/economiaparatodas/" />
        <SocialIcon url="https://www.youtube.com/@EconomiaParaTodas" />
        <SocialIcon url="https://open.spotify.com/show/1vd73GdOIUlb5e8HOWSO08?si=2e218170a4464c73" />
        <SocialIcon url="https://www.tiktok.com/@economiaparatodas" />
      </div>
    </footer>
  );
}