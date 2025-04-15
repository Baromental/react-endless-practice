import React from 'react';

export const Filter = ({ onFilter, filter }) => {
  return (
    <>
      <label>
        Find contacts by name or number
        <input type="text" name="filter" onChange={onFilter} value={filter} />
      </label>
    </>
  );
};
