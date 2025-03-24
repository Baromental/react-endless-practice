import React, { useEffect } from 'react';
import s from '../styles.module.css';

export default function Modal({ closeModal, content }) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowY = 'auto';
    };
  }, [closeModal]);

  // componentDidMount() {
  //   document.body.style.overflowY = 'hidden';
  //   document.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   document.body.style.overflowY = 'auto';
  //   document.removeEventListener('keydown', this.handleKeyDown);
  //   clearInterval(this.intervalId);
  //   clearTimeout(this.timeoutId);
  // }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.Overlay}>
      <div onClick={handleBackdropClick} className={s.Overlay}>
        <img src={content.largeImageURL} alt="" />
      </div>
    </div>
  );
}
