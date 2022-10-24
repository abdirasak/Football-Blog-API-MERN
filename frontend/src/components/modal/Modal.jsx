import React from 'react';
import hero from '../../assets/images/Hero.jpeg';
import './modal.css'
import { FaRegWindowClose } from 'react-icons/fa'
import ArticleForm from '../articleForm/ArticleForm';

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
            <FaRegWindowClose className='closeIcon' />
          </p>
          <div className='content'>
            <ArticleForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;