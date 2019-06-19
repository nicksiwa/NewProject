import React from 'react';
import TodoFormContainer from './containers/todoList/FormContainer';
import TodoListContainer from './containers/todoList/ListContainer';

function App() {
  return (
    <div className="app">
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
