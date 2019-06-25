import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApplicationLayout from './layouts/ApplicationLayout';
import AuthenticationLayout from './layouts/AuthenticationLayout';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ApplicationLayout} />
        <Route path="/login" component={AuthenticationLayout} />
      </div>
    </Router>
  );
}

export default App;
