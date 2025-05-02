import React from 'react';
import { Link, NavLink } from 'react-router';
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={s.container}>
      <Link className={s.homeLink} to="/">
        Phonebook
      </Link>
      <div>example@mail.com</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};
