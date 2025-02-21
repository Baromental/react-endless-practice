import React from 'react';
import s from '../styles.module.css';

export const ImageGalleryItem = ({ webformatURL, category }) => {
  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItem_image}
          src={webformatURL}
          alt={category}
        />
      </li>
    </>
  );
};
