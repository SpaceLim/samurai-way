import React from 'react';
import s from './../Friends.module.css';
import StoreContext from "../../../../StoreContext";
import Friends from "../Friends";
import Friend from "./Friends";

const FriendsContainer = (props) => {

    return <StoreContext.Consumer> {
        (store) => {
            let state = store.getState().sidebar;

            let FriendElements = state.avatar.map( f => <Friend avatar={f.avatar} name={f.name} />);

            return <Friends FriendElements={FriendElements}/>
        }
    }
    </StoreContext.Consumer>
}

export default FriendsContainer;