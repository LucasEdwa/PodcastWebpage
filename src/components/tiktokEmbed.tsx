import  { useEffect } from 'react';

const TikTokEmbed = ({ embedUrl }: { embedUrl: string }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='bg-custom-gradient transition-500'>
            <blockquote
                className="tiktok-embed"
                cite={embedUrl}
                data-video-id={embedUrl.split('/').pop()}
                style={{ maxWidth: '505px', minWidth: '325px' }}
            >
                <section>
                    <a
                        target="_blank"
                        title="@economiaparatodas"
                        href="https://www.tiktok.com/@economiaparatodas?refer=embed"
                    >
                        @economiaparatodas
                    </a>
                    <p>
                        Neste episódio vamos continuar nossa conversa sobre empresas na Suécia e começar a falar mais especificamente sobre impostos! Preparados? #empreendedorismo #EconomiaParaTodas #ept #MirellaNunes #Suécia
                    </p>
                    <a
                        target="_blank"
                        title="♬ originalljud  - Economia para todas"
                        href="https://www.tiktok.com/music/originalljud-Economia-para-todas-7431169823498849056?refer=embed"
                    >
                        ♬ originalljud  - Economia para todas
                    </a>
                </section>
            </blockquote>
        </div>
    );
};

export default TikTokEmbed;