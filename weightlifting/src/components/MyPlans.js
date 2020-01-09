import React from 'react';
import Navigation from './Navigation';

import { useContext } from 'react';
import { store } from "../reducers/WorkoutReducer";

const MyPlans = (props) => {

    const globalState = useContext(store).state;
    //The global state can now be accessed with globalState. TA-DAAA!!!!

    console.log("MY PLANS ARE: ", globalState);

    const editWorkoutPlan = (event) => {
        event.preventDefault();

        props.history.push(`/EditPlan/id`)
    }

    return (
        <div>
            <h1>My plans --> show newly create plans here</h1>
            <button onClick={editWorkoutPlan}>Edit plan</button>
        </div>
    );
}

export default MyPlans;