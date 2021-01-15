import React from 'react';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
