import { TODO } from '../constants/actionTypes';

const initialState = [
  { id: 1, title: "Noob", content: "Noob" },
  { id: 2, title: "Hello", content: "World" }
];

export function todoReducer(state=initialState, action) {
  switch(action.type) {
    case TODO.ADD:
      return [...state, {...action.payload}];
    default:
      return state;
  }
}
