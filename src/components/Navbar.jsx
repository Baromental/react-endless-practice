import React from 'react';
import { Link, NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice';
import { logoutThunk } from '../redux/auth/operation';

import s from './Navbar.module.css';

export const Navbar = () => {
  const { name, email } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <Link className={s.homeLink} to="/">
        Phonebook
      </Link>
      {isLoggedIn && (
        <div>
          {name}:{email}
        </div>
      )}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        )}
      </nav>
    </div>
  );
};
