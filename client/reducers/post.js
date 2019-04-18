
// a reducer takes in two things:
// 1. The action (info about what happened)
// 2. copy of current state

export default function posts(state = [], action){
    
    switch(action.type){
        case 'INCREMENT_LIKE':
            //return updated state
            const index = action.index
            return [
                ...state.slice(0, index),
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index+1),
            ]
           
        default:
            return state;
    }
    
}