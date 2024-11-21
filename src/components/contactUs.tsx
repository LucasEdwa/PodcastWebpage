import { IContactMethod } from '../models/IContactMethod';

const contactMethods: IContactMethod[] = [
  {
    label: 'Entre em contato via Kliently',
    href: 'https://kliently.se/jurister/mirella-nunes-siqueira/',
    description: 'Kliently'
  },
  {
    label: 'Entre em contato pelo Email',
    href: 'mailto:mirela.nunes@angico.se',
    description: 'Email'
  },
  {
    label: 'Agende uma mentoria hoje!',
    href: 'https://boka.se/economiaparatodas',
    description: 'Mentoria'
  },
  {
    label: 'Entre em contato via WhatsApp',
    href: 'https://wa.me/46727072952',
    description: 'WhatsApp'
  }
];

const ContactForm = () => {
  return (
    <div id="contact" className='bg-gradient-to-r relative from-[#6A329F]  via-[#9F6BB3] to-[#bb9acf] transition duration-500 py-10 flex items-center justify-between m-6 gap-4'>
      <h3 className='text-2xl shadow-2xl border-blue-500 border border-3 p-12 text-white w-2/44'>Entre em contato via:</h3>
      <div className='w-full'>
        <ul className='flex flex-col gap-5 text-left'>
          {contactMethods.map((method, index) => (
            <li key={index}>
              <a href={method.href} className='text-white underline'>
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