import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 11},
            ],
            newPostText: 'samurai'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Vitalii'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Lena'},
                {id: 4, name: 'andrei'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Valuha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: "How are you"},
                {id: 3, message: "Fine"},
            ],
            newMessagesBody: ''
        },
        sidebar: {
            avatar: [
                {
                    id: 1,
                    avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
                    name: 'Andrey'
                },
                {id: 2, avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', name: 'Lena'},
                {
                    id: 3,
                    avatar: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg',
                    name: 'Viktor'
                }
            ],
        },
    },
    _callSubscriber() {
        console.log('change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //Наблюдатель addPost updateNewPostText
    },



    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.state = store;
//store OOP