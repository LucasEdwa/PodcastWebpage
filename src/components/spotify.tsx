import { useTranslation } from 'react-i18next';

export default function Spotify() {
  const { t } = useTranslation();

  return (
    <div className="bg-custom-gradient transition-500 px-6 flex flex-col lg:w-2/3 lg:items-center gap-5">
      <span className="text-2xl italic mt-2 text-white">{t('spotify_title')}</span>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/show/1vd73GdOIUlb5e8HOWSO08?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}