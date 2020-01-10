import React from 'react';
import { Card } from '../StyledComponents/StyledComponents';

const PlanCard = (props) => {
  return (
    <Card>
      <h2>{props.bodypart} </h2>
    </Card>
  )
}

export default PlanCard;
