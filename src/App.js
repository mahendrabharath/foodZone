import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss';
import Dashboard from './components/Dashboard';
import DineOut from './components/DineOut/DineOut/DineOut';
import Orders from './components/Orders/Orders';
import reducer from './reducer';
import store, { FoodContext } from './store';


function App() {


  const [state, dispatch] = useReducer(reducer, store);

  return (
    <FoodContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dine-out">
              <DineOut />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </FoodContext.Provider>
  );
}

export default App;
