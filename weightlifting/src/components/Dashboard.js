import React from 'react';

const Dashboard = (props) => {

    const editWorkoutPlan = (event) => {
        event.preventDefault();

        props.history.push(`/EditPlan/id`)
    }

    return (
        <div>
            <h1>Dashboard component</h1>
            <button onClick={editWorkoutPlan} >Edit plan</button>
        </div>
    );
}

export default Dashboard;