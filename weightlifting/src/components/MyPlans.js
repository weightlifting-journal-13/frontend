import React, { useState } from 'react';
import Navigation from './Navigation';
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



    return (
        <div>
            <h1> Your Created Plans</h1>
            {bodyPart.map((obj, index) => (
                <MyPlanCard
                    key={index}
                    bodypart={obj.bodypart}
                    history={props.history}
                />
            ))}
        </div>
    );
}

export default MyPlans;