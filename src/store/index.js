import { createStore } from 'redux';


function counterReducer( state = [], action) {
    
    switch(action.type){
        case "createTodo":
            state.push(action.payload);
            return [...state];
        case "click":
            state.find((todo,i) => i === action.id ? todo.isDone = true : todo.isDone = false);
            return[...state]
        case "delete":
            state.splice(action.id,1);
            return[...state]
        default:
            return [...state];
    }
}

let store = createStore(counterReducer);

export default store;