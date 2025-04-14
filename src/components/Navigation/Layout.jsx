import React, { Suspense } from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Suspense fallback={<h1>Loading page...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
