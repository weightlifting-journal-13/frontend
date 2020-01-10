import React from 'react';
import { Card } from '../StyledComponents/StyledComponents';

const PlanCard = (props) => {
  return (
    <Card>
      <h2 key={props.id}>{props.bodypart} day </h2>
    </Card>
  )

}

export default PlanCard;
