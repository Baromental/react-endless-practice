import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import s from '../styles.module.css';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <div>
      <ul className={s.ImageGallery}>
        {pictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            {...picture}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};
