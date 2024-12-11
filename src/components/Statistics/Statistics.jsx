import React from 'react';
import s from './Statistics.module.css'

export const Statistics = ({dataStatistics}) => {
  return <section className={s.statistics}>
    <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
      {dataStatistics.map(data => (
        <li className={s.item} key={data.id} style={{ background: getBackgroundColor(data.id) }}>
          <span className={s.label}>{data.label}</span>
          <span className={s.percentage}>{data.percentage}%</span>
        </li>
      ))}
      </ul>
  </section>
};

const getBackgroundColor = (id) => {
  switch (id) {
    case 'id-1':
      return '#87CEEB';
    case 'id-2':
      return '#800080';
    case 'id-3':
      return '#FF0000';
    case 'id-4':
      return '#7FFFD4';
    case 'id-5':
      return '#0000FF';
    default:
      return '#f0f0f0';
  }
};

