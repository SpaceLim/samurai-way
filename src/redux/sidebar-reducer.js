let initialState ={
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;

}
export default sidebarReducer;

