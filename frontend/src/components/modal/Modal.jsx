import React from 'react';
import hero from '../../assets/images/Hero.jpeg';
import './modal.css'
import { FaRegWindowClose } from 'react-icons/fa'

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={hero} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            <FaRegWindowClose style={{ color: '#10bbc4' }} />
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;