import React from 'react';

export const Statistics = ({dataStatistics}) => {
  return <section>
    <h2>Upload stats</h2>
    <div>
      <ul>
      {dataStatistics.map(data => (
        <li id={data.id}>
          <span>{data.label}</span>
          <span>{data.percentage}%</span>
        </li>
      ))}
      </ul>
    </div>
  </section>
  
  // <section class="statistics">
  //   <h2 class="title">Upload stats</h2>

  //   <ul class="stat-list">
  //     <li class="item">
  //       <span class="label">.docx</span>
  //       <span class="percentage">4%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.mp3</span>
  //       <span class="percentage">14%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.pdf</span>
  //       <span class="percentage">41%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.mp4</span>
  //       <span class="percentage">12%</span>
  //     </li>
  //   </ul>
  // </section>
}

