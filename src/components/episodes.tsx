import { Episodes as EpisodesModel } from "../models/Episode";
import epi6 from "../tax-episode6.jpeg";
import epi5 from "../tax-episode5.jpeg";
import epi4 from "../episode4.jpeg";

export const Episodes = () => {
  const projects: EpisodesModel[] = [
    {
      title: "Episodio 6",
      description: "Como declarar imposto de renda na Suécia",
      image: epi6,
      linkYoutube: "https://youtu.be/G9XJlWouqsE?si=MOfBX_yny5q2wtZj",
    },
    {
      title: "Episodio 5",
      description: "Como funciona o imposto de renda na Suécia",
      image: epi5,
      linkYoutube: "https://youtu.be/oT2Sr3JL1MU?si=nWq5cKNUPlMs7Sox",
    },
    {
      title: "Episodio 4",
      description: "Commo abrir sua empresa na Suécia pt 2",
      image: epi4,
      linkYoutube: "https://youtu.be/oOGQLjuho1o?si=v6u4tIQTlS0KKqwG",
    },
    {
      title: "Episodio 3",
      description: "Como abrir sua empresa na Suécia pt 1",
      image: epi4,
      linkYoutube: "https://youtu.be/nrrTF6vfxlA?si=0SGHEOr9HVsbyR-7",
    },
  ];

  return (
    <div className="w-full  overflow-auto custom-scrollbar">
      <div className=" w-full  shadow-2xl shadow-black">
        <div className="flex overflow-x-auto p-4 gap-3 space-x-4 custom-scrollbar">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-64 ">
             <a href={project.linkYoutube} target="_blank" rel="noreferrer" className="no-underline text-white">
              <img src={project.image} alt={project.title} className="rounded-lg" />
              <h2 className="text-lg font-bold hover:underline">{project.title}</h2>
              <p>{project.description}</p>
              </a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};