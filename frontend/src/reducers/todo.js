import { TODO } from '../constants/actionTypes';

let nextTodoId = 3;
const initialState = [
  { id: 1, title: "Noob", content: "Noob" },
  { id: 2, title: "Hello", content: "World" }
];

export function todoReducer(state=initialState, action) {
  switch(action.type) {
    case TODO.ADD:
      return [
        ...state,
        {
          id: nextTodoId++,
          ...action.payload
        }
      ];
    case TODO.DELETE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
