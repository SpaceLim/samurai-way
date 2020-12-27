const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessagesBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            return {
                ...state,
                newMessagesBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;