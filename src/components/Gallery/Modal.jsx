import React from 'react';
import s from '../styles.module.css';

class Modal extends React.Component {
  intervalId = null;
  timeoutId = null;

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
    document.removeEventListener('keydown', this.handleKeyDown);
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={s.Overlay}>
        <div onClick={this.handleBackdropClick} className={s.Overlay}>
          <img src={this.props.content.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
