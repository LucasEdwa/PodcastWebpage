import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import ContactForm from "../components/contactUs";
import Hero from "../components/hero";
import { Instagram } from "../components/instagram";
import { Episodes } from "../components/episodes";
import Spotify from "../components/spotify";
import TikTokEmbed from "../components/tiktokEmbed";

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

export default function Home() {
    return (
        <div className="bg-custom-gradient   w-full scroll-smooth ">
            <Hero />

            <Episodes />

            <MotionDiv>
                <div className="p-2 lg:flex lg:justify-center">
                    <Instagram />
                </div>
            </MotionDiv>
            <MotionDiv>
                <div className="lg:flex lg:justify-center p-4">

                    <Spotify />
                </div>
            </MotionDiv>
            <MotionDiv>
                <div className=" lg:flex lg:justify-center">  <ContactForm /></div>
            </MotionDiv>
            <MotionDiv>
                <TikTokEmbed embedUrl="https://www.tiktok.com/@economiaparatodas/video/7431169390130810144" />
            </MotionDiv>
        </div>
    );
}