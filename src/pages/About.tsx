import image from '../processed-189A72F1-E649-4F89-933A-D1EDA411A72D.jpeg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

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
    return (
        <div className="bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf] transition duration-500 w-full scroll-smooth">
            <div className="p-12 h-screen">
                <MotionDiv>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold p-6 w-full text-center text-white">Sobre o Economia Para Todas</h1>
                        <img src={image} alt="Economia" className="w-[21rem] h-[21rem] shadow-xl object-cover rounded-full" />
                    </div>

                    <MotionDiv>
                        <p className="text-xl mt-4 text-left text-white">Meu nome é Mirella Nunes, me formei em direito na Suécia em 2021. Desde então trabalho com aconselhamento jurídico nas áreas de direito financeiro, familiar, tributário e trabalhista.</p>
                    </MotionDiv>
                    <MotionDiv>
                        <p className="text-xl mt-4 text-left text-white">Criei o Economia Para Todas como um projeto para ajudar mulheres brasileiras na Suécia a atingir sua independência financeira. Hoje o Economia e empreendedorismo na Suécia.</p>
                    </MotionDiv>
                    <MotionDiv>
                        <p className="text-xl mt-4 text-left text-white">Hoje o EPT virou um Podcast, onde falo tudo sobre direito, economia e empreendedorismo. Além disso, trabalho com consultorias de assuntos variados e ofereço acompanhamento jurídico em português, espanhol, inglês e sueco.</p>
                    </MotionDiv>
                </MotionDiv>
            </div>
            <MotionDiv>
                <div className="p-8 mt-10 bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf] transition duration-500  w-full scroll-smooth">
                    <h1 className="text-4xl font-bold text-center text-white">E mais!</h1>

                    <MotionDiv>
                        <p className="text-xl mt-4 p-4 text-justify text-white">
                            O EPT (Economia Para Todas) surgiu em 2020, pela necessidade de trazer informações para a comunidade feminina brasileira na Suécia.
                            O projeto começou como um grupo no Facebook, que virou um fórum de apoio para mulheres, com o intuito de tirar dúvidas e acolher quem precisasse de ajuda.
                        </p>
                    </MotionDiv>

                    <MotionDiv>
                        <p className="text-xl mt-4 text-center text-white">
                            Através do EPT, realizei palestras e workshops nas áreas de direito, economia e empreendedorismo.
                            Em 2022, migramos para o Instagram, onde comecei também a apoiar a comunidade de mulheres latinas, trazendo também post em espanhol. O projeto hoje é podcast disponível gratuitamente no YouTube, Spotify e TikTok.
                        </p>

                    </MotionDiv>
                </div>
            </MotionDiv>
            
        </div>
    );
}