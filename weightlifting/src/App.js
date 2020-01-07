import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreatePlan from './components/CreatePlan';
import MyPlans from './components/MyPlans';
import PresetPlans from './components/PresetPlans';
import Profiles from './components/Profiles';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import './App.css';

function App() {


  return (
    <div className="App">

      <Navigation />

      <Route 
        exact path='/Registration'
        render={props => <Registration {...props}  /> } />
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
      <Route 
        exact path='/Profiles'
        render={props => <Profiles {...props} />} />
    </div>
  );
}

export default App;
