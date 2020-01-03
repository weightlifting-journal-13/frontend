import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreatePlan from './components/CreatePlan';
import MyPlans from './components/MyPlans';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <PrivateRoute  exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/CreatePlan' component={CreatePlan} />
      <Route exact path='/MyPlans' component={MyPlans} />
    </div>
  );
}

export default App;
