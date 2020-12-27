import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/11/pirat_skelet_10538.jpg" alt=""/>
            <p>{ props.message }</p>
            <span>{ props.likesCount }</span>
        </div>
    </div>
}

export  default Post;