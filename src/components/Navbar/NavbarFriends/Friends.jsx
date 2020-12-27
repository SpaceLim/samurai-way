import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/friend";
import store from "../../../redux/store";


const MyFriends = () => {

    let state = store.getState().sidebar;

    let FriendElements = state.avatar.map( f => <Friend avatar={f.avatar} name={f.name} />);

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            { FriendElements }
        </div>
    )
}

export default MyFriends;