import React, { useState } from 'react';
import './FloatingIcon.css';
import FormModal from './FormModal';
import whatsappLogo from '../assets/wlogo.png';

function FloatingIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="floating-icon"
        onClick={() => setIsModalOpen(true)}
        title="Open Form"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
      </div>

      {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default FloatingIcon;
