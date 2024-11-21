export default function Spotify() {
    return (
      <div className="bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#c4a8d5] transition duration-500  px-6  flex flex-col gap-5">
        <span className="text-2xl italic mt-2 text-white ">Estamos também no Spotify</span>
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