import { IContactMethod } from '../models/IContactMethod';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  const contactMethods: IContactMethod[] = [
    {
      label: t('contact_via_kliently'),
      href: 'https://kliently.se/jurister/mirella-nunes-siqueira/',
      description: 'Kliently'
    },
    {
      label: t('contact_via_email'),
      href: 'mailto:mirela.nunes@angico.se',
      description: 'Email'
    },
    {
      label: t('schedule_mentoring'),
      href: 'https://boka.se/economiaparatodas',
      description: 'Mentoria'
    },
    {
      label: t('contact_via_whatsapp'),
      href: 'https://wa.me/46727072952.',
      description: 'WhatsApp'
    }
  ];

  return (
    <div id="contact" className='bg-custom-gradient transition-500 py-10 lg:p-20 flex items-center justify-between m-6 gap-2'>
      <h3 className='text-2xl shadow-2xl border-blue-500 border border-3 p-2 text-black w-2/4'>{t('contact_us')}</h3>
      <div className='w-full'>
        <ul className='flex flex-col gap-5 text-left'>
          {contactMethods.map((method, index) => (
            <li key={index}>
              <a href={method.href} className='text-black bg-gray-900/10 p-1 underline hover:p-10 text-sm'>
                {method.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;