import { Modal, Button } from 'react-bootstrap';
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

const ContactModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Vamos conversar?</Modal.Title>
            </Modal.Header>
            <Modal.Body className=''>
            <div id="contact" className='bg-gradient-to-r relative from-[#6A329F] mb-50 via-[#9F6BB3] to-[#bb9acf] mb-10 transition duration-500 p-10 flex items-center justify-between m-6 gap-4'>
      <div className='w-full'>
        <ul className='flex flex-col gap-5 text-left'>
          {contactMethods.map((method, index) => (
            <li key={index}>
              <a href={method.href} className='text-white underline w-full'>
                {method.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
               
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;