import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: Math.random(),
        title: 'text 1',
        checked: false
    },
    {
        id: Math.random(),
        title: 'text 2',
        checked: true
    }
];

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            return [...state,{
                id: Math.random(),
                title: action.payload,
                checked: false
            }]
        },
        checkTodo: (state, action) => {
            const checked = state.find((obj) => obj.id === action.payload).checked
            state.find((obj) => obj.id === action.payload).checked = !checked
        },
        deleteTodo:(state, action) => {
            state = state.filter((obj)=> obj.id !== action.payload)
            return state
        },
        editTodo:(state, action) => {
            return state.map((val) => {
                if (val.id === action.payload.id ) {
                    return {...val, title: action.payload.text}
                }
                return val
            })
        }
    },
});

export const { addTodo, checkTodo, deleteTodo, editTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
