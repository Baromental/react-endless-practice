import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <h1>Redux | Auth</h1>
      <div>example@mail.com</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts"></NavLink>
        <NavLink to="/register"></NavLink>
        <NavLink to="/login"></NavLink>
      </nav>
    </div>
  );
};
