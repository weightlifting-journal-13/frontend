import React from 'react';

const MyPlans = (props) => {

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