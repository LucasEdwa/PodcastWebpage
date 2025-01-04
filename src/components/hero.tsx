import image from '../processed-189A72F1-E649-4F89-933A-D1EDA411A72D.jpeg';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-black w-full h-[100vh]">
                <div className="relative flex justify-center gap-3 w-full">
                    <div className="absolute w-[18rem] h-[22rem] rounded-full border-3 border-yellow-500 animate-spin-slow"></div>
                    <div className="absolute w-[18rem] h-[22rem] rounded-full border-3 border-red-600/40 animate-spin-reverse"></div>
                    <div className="absolute w-[18rem] h-[22rem] rounded-full border-3 border-purple-600/50 animate-spin-fast"></div>

                    <img src={image} alt="Economia" className="w-[21rem]  h-[21rem] p-2 mt-3 object-cover rounded-full" />
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