import React from 'react';

export const FriendsList = ({friends}) => {
    return <section>
        <div>
            <ul class="friend-list">
                {friends.map(friend => (
                    <li id={friend.id}>
                    <span>{friend.isOnline }</span>
                    {/* <span className={isOnline ? s.online : s.offline}></span> */}
                    <img src={friend.avatar} alt={`User avatar for ${friend.name}`} width="48"></img>
                    <p>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}