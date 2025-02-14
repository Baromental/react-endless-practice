import React from 'react';

export const ImageGalleryItem = ({ searchRes }) => {
  return (
    <div>
      {searchRes.map(res => (
        <li key={res.id} class="gallery-item">
          <img src="" alt="" />
        </li>
      ))}
    </div>
  );
};
