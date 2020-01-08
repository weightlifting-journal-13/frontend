import React from 'react';
import Navigation from './Navigation';


const MyPlans = (props) => {

    const editWorkoutPlan = (event) => {
        event.preventDefault();

        props.history.push(`/EditPlan/id`)
    }

    return (
        <div>
            <Navigation />
            <h1>My plans --> show newly create plans here</h1>
            <button onClick={editWorkoutPlan}>Edit plan</button>
        </div>
    );
}

export default MyPlans;