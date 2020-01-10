import React, { useState } from 'react';
import Navigation from './Navigation';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { LogoutButton } from '../StyledComponents/StyledComponents';
import MyPlanCard from './MyPlanCard';
import { data } from '../data';

import { useContext } from 'react';
import { store } from "../reducers/WorkoutReducer";

const MyPlans = (props) => {


    const [bodyPart, setBodyPart] = useState(data)

    const globalState = useContext(store).state;
    //The global state can now be accessed with globalState. TA-DAAA!!!!

    console.log("MY PLANS ARE: ", globalState);

    // --> redirects to EditWorkoutPlan
    const editWorkoutPlan = (event) => {
        event.preventDefault();

        props.history.push(`/EditPlan/id`)
    }

    //This functionality will go in the 'MyPlans" card to delete an entire Workout Plan
    const deleteWorkoutPlan = (event) => {
        event.preventDefault();

        props.history.push('/Dashboard') //will remove this ,just for redirect to make sure redirect works
        // axiosWithAuth()
        //     .delete(`/workouts/${id}`) //check for correct api endpoint -->
        //         console.log(response)

    // const deleteWorkoutPlan = (event) => {
    //     event.preventDefault();


        //         props.history.push('/Dashboard')
        //     })
        //     .catch(error => {
        //         console.log('Sorry, your workout not deleted')
        //     })
    }

    return (
        <div>

<<<<<<< HEAD



            <h1>My plans --> show newly create plans here</h1>
            <button onClick={editWorkoutPlan}>Edit plan</button>
            <button onClick={deleteWorkoutPlan} >Delete plan</button>
=======
            <h1> Your Created Plans</h1>
            {bodyPart.map((obj, index) => (
              <MyPlanCard 
                key={index}
                bodypart={obj.bodypart}
              />
            ))}

>>>>>>> eb019df025f5796b30934a794736b326cb7888af
        </div>
    );


}

export default MyPlans;