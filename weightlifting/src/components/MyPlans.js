import React, { useState } from 'react';
import Navigation from './Navigation';
import { LogoutButton } from '../StyledComponents/StyledComponents';
import MyPlanCard from './MyPlanCard';
import { data } from '../data';


const MyPlans = (props) => {

    const [bodyPart, setBodyPart] = useState(data)

    return (
        <div>
            <h1> Your Created Plans</h1>
            {bodyPart.map((obj, index) => (
              <MyPlanCard 
                key={index}
                bodypart={obj.bodypart}
              />
            ))}
        </div>
    );


}

export default MyPlans;