import { TODO } from '../constants/actionTypes';

export const createTodo = data => {
  return {
    type: TODO.ADD,
    payload: data
  }
};

export const deleteTodo = id => {
  return {
    type: TODO.DELETE,
    payload: id
  }
}
