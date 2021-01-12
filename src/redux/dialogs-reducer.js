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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;