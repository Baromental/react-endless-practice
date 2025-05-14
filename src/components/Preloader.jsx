import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import s from './Preloader.module.css';
export const Preloader = () => {
  return (
    <div className={s.container}>
      <CirclesWithBar
        height="400"
        width="400"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h1>Loading</h1>
    </div>
  );
};
