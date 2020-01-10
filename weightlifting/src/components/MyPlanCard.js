import React from 'react';
import { Card } from '../StyledComponents/StyledComponents';
import { EditButton } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';

const MyPlanCard = (props) => {

  const editWorkoutPlan = (event) => {
    event.preventDefault();

    props.history.push(`/EditPlan/id`)
}

  return(
    <Card>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-evenly"}}>
        <h2 key={props.id}> 
        workoutplan <br></br>
        workout description 
        </h2>

        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative", bottom: "-85px"}}>
          <EditButton selectStyle onClick={editWorkoutPlan}>Select plan</EditButton>
          <EditButton onClick={editWorkoutPlan}>Edit plan</EditButton>
        </div>
      </div>
    </Card>
  )
}

export default MyPlanCard;

