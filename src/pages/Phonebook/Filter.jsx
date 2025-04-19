import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from '../../redux/phonebook/slice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name or number
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
          value={filter}
        />
      </label>
    </>
  );
};
