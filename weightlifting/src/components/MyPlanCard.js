import React from 'react';
import { Card } from '../StyledComponents/StyledComponents';
import { EditButton } from '../StyledComponents/StyledComponents';

const MyPlanCard = (props) => {
  return(
    <Card>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-evenly"}}>
        <h2 key={props.id}> 
        workoutplan <br></br>
        workout description 
        </h2>

        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative", bottom: "-85px"}}>
          <EditButton selectStyle onClick={props.delete}>Select plan</EditButton>
          <EditButton onClick={props.edit}>Edit plan</EditButton>
        </div>
      </div>
    </Card>
  )
}

export default MyPlanCard;

