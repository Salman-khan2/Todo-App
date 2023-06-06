import { ADD_TODO, DELETE_ALL, REMOVE_TODO, } from "../actions";


const initialState=[
    {id: 1, todo: 'User Research & Analysis', completed: false},
    {id: 2, todo: 'Black & White Wireframe', completed: false},
    {id: 3, todo: 'Design On Figma', completed: true},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        default: return state;
    }
}