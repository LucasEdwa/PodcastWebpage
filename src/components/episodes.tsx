import { Episodes as EpisodesModel } from "../models/Episode";
import epi6 from "../tax-episode6.jpeg";
import epi5 from "../tax-episode5.jpeg";
import epi4 from "../episode4.jpeg";
import vlogepi from "../vlogepi.png";
import { useTranslation } from 'react-i18next';

export const Episodes = () => {
  const { t } = useTranslation();

  const projects: EpisodesModel[] = [
    {
      title: t('episode_vlog_title'),
      description: t('episode_vlog_description'),
      image: vlogepi,
      linkYoutube: "https://youtu.be/lEVywVWTPIs?si=SHRkC9ozXfN5EL3F",
    },
    {
      title: t('episode_6_title'),
      description: t('episode_6_description'),
      image: epi6,
      linkYoutube: "https://youtu.be/G9XJlWouqsE?si=MOfBX_yny5q2wtZj",
    },
    {
      title: t('episode_5_title'),
      description: t('episode_5_description'),
      image: epi5,
      linkYoutube: "https://youtu.be/oT2Sr3JL1MU?si=nWq5cKNUPlMs7Sox",
    },
    {
      title: t('episode_4_title'),
      description: t('episode_4_description'),
      image: epi4,
      linkYoutube: "https://youtu.be/oOGQLjuho1o?si=v6u4tIQTlS0KKqwG",
    },
    {
      title: t('episode_3_title'),
      description: t('episode_3_description'),
      image: epi4,
      linkYoutube: "https://youtu.be/nrrTF6vfxlA?si=0SGHEOr9HVsbyR-7",
    },
  ];

  return (
    <div className="w-full overflow-auto custom-scrollbar">
      <div className="w-full shadow-2xl shadow-black">
        <div className="flex overflow-x-auto p-4 gap-3 space-x-4 custom-scrollbar">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-64">
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