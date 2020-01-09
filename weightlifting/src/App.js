import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreatePlan from './components/CreatePlan';
import MyPlans from './components/MyPlans';
import PresetPlans from './components/PresetPlans';
import Profiles from './components/Profiles';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import EditWorkoutPlan from './components/EditWorkoutPlan';
import './App.css';

function App() {


  return (
    <div className="App">
      <PrivateRoute path='/' component={Navigation} />
      <Switch>
        <Route exact path='/Registration' render={props => <Registration {...props} />} />
        <Route exact path='/' render={props => <Login {...props} />} />
        <PrivateRoute exact path='/Dashboard' component={Dashboard} />
        <PrivateRoute exact path='/MyPlans' component={MyPlans} />
        <PrivateRoute exact path='/CreatePlan' component={CreatePlan} />
        <PrivateRoute exact path='/PresetPlans' component={PresetPlans} />
        <PrivateRoute exact path='/Profiles' component={Profiles} />
        <PrivateRoute exact path='/EditPlan/:id' component={EditWorkoutPlan} />
      </Switch>
    </div>
  );
}

export default App;
