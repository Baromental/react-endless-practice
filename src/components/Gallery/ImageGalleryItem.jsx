import React from 'react';
import s from '../styles.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <>
      <li class={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItem_image}
          src={webformatURL}
          alt={largeImageURL}
          onClick={() => openModal({ largeImageURL })}
        />
      </li>
    </>
  );
};
