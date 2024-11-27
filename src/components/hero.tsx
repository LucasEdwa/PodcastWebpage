import image from '../processed-189A72F1-E649-4F89-933A-D1EDA411A72D.jpeg';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-white w-full h-[100dvh]">
                <div className="flex justify-center gap-3">
                    <img src={image} alt="Economia" className="w-[21rem] border-2 h-[21rem] p-2 mt-5 object-cover rounded-full" />
                </div>
                <div className="p-12">
                    <h1 className="text-4xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t('hero_title') }}></h1>
                    <p className="text-md mt-4 text-center">{t('hero_subtitle')}</p>
                    <p className="text-md mt-4 text-center">{t('hero_description')}</p>
                </div>
            </div>
        </>
    );
}