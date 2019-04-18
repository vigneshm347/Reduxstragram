
// a reducer takes in two things:
// 1. The action (info about what happened)
// 2. copy of current state

function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
        return [...state.splice(0, action.index),
        ...state.splice(action.index + 1)
        ]
        default:
            return state;
    }
}

export default function comments(state = [], action){
    
    if(typeof action.postId !== 'undefined'){
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}