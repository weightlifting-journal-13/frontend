import React from 'react';
import { Card } from '../StyledComponents/StyledComponents';
import { EditButton } from '../StyledComponents/StyledComponents';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const MyPlanCard = (props) => {



  const editWorkoutPlan = (event) => {
    event.preventDefault();

    props.history.push(`/EditPlan/id`);
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
    <Card>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-evenly" }}>
        <h2 key={props.id}>
          workoutplan <br></br>
          workout description
        </h2>

        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative", bottom: "-85px" }}>
          <EditButton>Select plan</EditButton>
          <EditButton onClick={editWorkoutPlan}>Edit plan</EditButton>
          <EditButton onClick={deleteWorkoutPlan}>Delete plan</EditButton>
        </div>
      </div>
    </Card>
  )
}

export default MyPlanCard;

