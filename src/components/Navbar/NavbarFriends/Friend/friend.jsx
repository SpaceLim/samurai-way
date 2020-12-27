import React from 'react';
import s from './../Friends.module.css';

const Friend = (props) => {
    return <div className={s.friend}>
        <img src={props.avatar} alt=""/>
        <p>{props.name}</p>
    </div>
}

export default Friend;