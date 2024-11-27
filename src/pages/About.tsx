import image from '../podcast.jpeg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";
import { useTranslation } from 'react-i18next';

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const MotionDiv = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="bg-custom-gradient transition-500 w-full scroll-smooth grids">
            <div className="p-12 h-screen">
                <MotionDiv>
                    <div className="flex flex-col ">
                        <div className=" ">
                            <h1 className="text-3xl font-bold  w-full text-center text-white">
                                {t('economia_para_todas')}
                            </h1>
                            <h2 className="text-xl font-bold  w-full text-center text-white">
                                {t('conhecimento_que_transforma_vidas')}
                            </h2>
                        </div>
                        <img src={image} alt="Economia" className="w-[21rem] h-[21rem] shadow-xl object-cover rounded-full" />
                    </div>

                    <MotionDiv>
                        <h2 className="text-md mt-2 font-semibold  text-white text-center">
                            {t('sobre_mim')}
                        </h2>
                        <p className="text-sm mt-4 text-left text-white" dangerouslySetInnerHTML={{ __html: t('meu_nome') }}>
                        </p>
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className="text-md font-semibold  text-white text-center">
                            {t('nossa_missao')}
                        </h2>
                        <p className="text-md mt-4 text-justify text-white">
                            {t('criei_o_economia')}
                        </p>
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className="text-md font-semibold  text-white text-center">
                            {t('podcast_ept')}
                        </h2>
                        <p className="text-sm  text-left text-white">
                            {t('hoje_o_ept')}
                        </p>
                    </MotionDiv>
                </MotionDiv>
            </div>
            <MotionDiv>
                <div className="p-8 bg-gradient-to-r mt-80 from-[#6A329F] via-[#9F6BB3] to-[#ccaddf] transition duration-500 w-full scroll-smooth">
                    <h1 className="text-4xl text-left  p-2 text-white border-y-2">
                        {t('do_facebook_ao_podcast')}
                    </h1>

                    <MotionDiv>
                        <p className="text-sm mt-4 text-justify text-white">
                            {t('o_ept_surgiu')}
                        </p>
                    </MotionDiv>

                    <MotionDiv>
                        <p className="text-md mt-4 text-justify text-white">
                            {t('atraves_do_ept')}
                        </p>
                    </MotionDiv>
                </div>
            </MotionDiv>
        </div>
    );
}