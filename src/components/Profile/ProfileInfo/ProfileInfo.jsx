import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Smile from "./../../../assets/images/smile.png";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://under35.me/wp-content/uploads/2016/09/%D0%9F%D0%B0%D1%80%D0%BA-%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B8-IMG-Worlds-of-Adventure-14.jpg"
                    alt=""/>
            </div>
               <div className={s.ava}><img src={props.profile.photos.large !=null ? props.profile.photos.large : userPhoto }  alt=""/></div>
            <div className={s.descriptionBlock}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.lookingForAJobDescription}</p>
                {props.profile.lookingForAJob === true ?
                    <div className={s.lookingForAJob}>
                    <img  src={Smile}/>
                    </div> :
                    <p>I am look for a job</p>
                }
                <div className={s.contacts}>
                    <ul>
                        { props.profile.contacts.youtube !=null ? <li><a href={'https://' +  props.profile.contacts.youtube }>youtube</a></li> : ''}
                        { props.profile.contacts.github !=null ? <li><a href={'https://' +  props.profile.contacts.github }>github</a></li> : ''}
                        { props.profile.contacts.mainLink !=null ? <li><a href={'https://' +  props.profile.contacts.mainLink }>mainLink</a></li> : ''}
                        { props.profile.contacts.instagram !=null ? <li><a href={'https://' +  props.profile.contacts.instagram }>instagram</a></li> : ''}
                        { props.profile.contacts.twitter !=null ? <li><a href={'https://' +  props.profile.contacts.twitter }>twitter</a></li> : ''}
                        { props.profile.contacts.vk !=null ? <li><a href={'https://' +  props.profile.contacts.vk }>vk</a></li> : ''}
                        { props.profile.contacts.website !=null ? <li><a href={'https://' +  props.profile.contacts.website }>website</a></li> : ''}
                        { props.profile.contacts.facebook !=null ? <li><a href={'https://' +  props.profile.contacts.facebook }>facebook</a></li> : ''}

                    </ul>
                </div>
                <div className={s.about}>
                    <p>{props.profile.aboutMe}</p>
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;