import React from 'react';
import s from './FriendList.module.css'

export const FriendsList = ({friends}) => {
    return <section>
        <div>
            <ul className={s.friendList}>
                {friends.map(friend => (
                    <li key={friend.id} className={s.item}>
                    <span className={friend.isOnline ? s.online : s.offline}></span>
                    <img className={s.avatar} src={friend.avatar} alt={`User avatar for ${friend.name}`} width="48"></img>
                    <p className={s.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}