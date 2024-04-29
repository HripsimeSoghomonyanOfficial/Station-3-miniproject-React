import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
  middleware: (getPrevMiddlewares) => [...getPrevMiddlewares(), logger]
});
