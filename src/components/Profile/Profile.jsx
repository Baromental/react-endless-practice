import React from 'react';

export const Profile = ({user}) => {
  return <section>
      <div>
        <img
          src={user.avatar}
          alt={user.tag}
        />
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
  </section>
  
  // <div class="profile">
  //   <div class="description">
  //     <img
  //       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
  //       alt="User avatar"
  //       class="avatar"
  //     />
  //     <p class="name">Petra Marica</p>
  //     <p class="tag">@pmarica</p>
  //     <p class="location">Salvador, Brasil</p>
  //   </div>

  //   <ul class="stats">
  //     <li>
  //       <span class="label">Followers</span>
  //       <span class="quantity">1000</span>
  //     </li>
  //     <li>
  //       <span class="label">Views</span>
  //       <span class="quantity">2000</span>
  //     </li>
  //     <li>
  //       <span class="label">Likes</span>
  //       <span class="quantity">3000</span>
  //     </li>
  //   </ul>
  // </div>
}

