import React, { UseState, UseEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  height: 200px;
  width: 500px;
  margin: 2%;
  border-radius: 15px;
  box-shadow: 5px 5px 30px -10px;
`

const PlanCard = (props) => {
  return(
    <Card>
      <h2 key={props.id}>{props.bodypart} day </h2>
    </Card>
  )

}

export default PlanCard;