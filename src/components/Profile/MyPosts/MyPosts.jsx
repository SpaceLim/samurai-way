import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";



const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addNewPost = (values) => {
        debugger;
        props.addPost(values.newPostBody);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

let addPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostBody' placeholder="Enter yor post"
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPost' })(addPost);

export default MyPosts;