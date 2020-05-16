import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss';
import Dashboard from './components/Dashboard';
import DineOut from './components/DineOut/DineOut';
import OrderHistory from './components/OrdersHistory'


function App() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dine-out">
            <DineOut />
          </Route>
          <Route path="/orders">
            <OrderHistory />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
