import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreatePlan from './components/CreatePlan';
import MyPlans from './components/MyPlans';
import PresetPlans from './components/PresetPlans';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
        exact path='/' 
        render={props => <Login {...props} />} />
      <PrivateRoute  exact path='/Dashboard' component={Dashboard}/>
      <Route 
        exact path='/MyPlans' 
        render={props => <MyPlans {...props} />} />
      <Route 
        exact path='/CreatePlan' 
        render={props => <CreatePlan {...props} />} />
      <Route 
        exact path='/PresetPlans'
        render={props => <PresetPlans {...props} />} />
    </div>
  );
}

export default App;
