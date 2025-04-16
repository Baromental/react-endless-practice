import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/phonebook/selectors';
import { setFilter } from '../../redux/phonebook/actions';

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
