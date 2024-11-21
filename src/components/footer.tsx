import { SocialIcon } from "react-social-icons";

export default function Footer () {
    return (
        <footer className="bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#d5bae6] transition duration-500  bottom-0  w-full text-white ">
            <div className="  p-1 text-center">
                <h1 className="text-4xl font-bold">Instagram Economia para todas</h1>
                <p className="text-xl mt-4">Advogada brasileira formada na Suécia, especializada em direito financeiro e criadora do Podcas Economia para Todas </p>
            </div>
            <div className="flex gap-5 p-9 items-center">
            <SocialIcon url="https://www.instagram.com/economiaparatodas/" />
                    <SocialIcon url="hhttps://www.youtube.com/@EconomiaParaTodas" />
                    <SocialIcon url="https://open.spotify.com/show/1vd73GdOIUlb5e8HOWSO08?si=2e218170a4464c73" />
                    <SocialIcon url="https://www.tiktok.com/@economiaparatodas" />
                   <SocialIcon url="https://www.facebook.com/economiaparatodas" bgColor="#6A329F" fgColor="#fff" style={{ height: 50, width: 50 }} />

            </div>
        </footer>
    );
}