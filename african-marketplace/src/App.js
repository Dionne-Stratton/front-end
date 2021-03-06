import React from 'react';
import {Route, Redirect } from 'react-router-dom'
import './App.css';

import Landing from './components/Landing'

function App() {
  return (
    
    <div className="App">
      <Route exact path="/">
        <Redirect to="/landing" />
      </Route>
      <Route path='/landing' component={Landing} />
    </div>
  );
}

export default App;
