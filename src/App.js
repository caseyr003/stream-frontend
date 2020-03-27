import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import GenerateStream from './containers/GenerateStream/GenerateStream';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={GenerateStream} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </div>
  );
}

export default App;
