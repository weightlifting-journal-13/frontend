import React from 'react';

import { PresetPlanButton, CustomPlanButton, ImageWrapper, ButtonWrapper } from '../StyledComponents/StyledComponents';


const Dashboard = (props) => {

    //onClick redirect to CreatePlan
    const onHandleClickToCreatePlan = (event) => {
        props.history.push('/CreatePlan')
    }

    //onClick redirect to PresetPlan
    const onHandleClickToPresetPlan = (event) => {
        props.history.push('/PresetPlans')
    }

    return (
        <div>
            <h1>Welcome to the new you!</h1>
            <h3>Please select a preset workout plan or create your own workout plan.</h3>
            <ImageWrapper src={'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80'} alt='beginner workout man and woman' />
            <ButtonWrapper>
                <CustomPlanButton onClick={onHandleClickToCreatePlan} >Create custom plan</CustomPlanButton>
                <PresetPlanButton onClick={onHandleClickToPresetPlan} >Select preset plan</PresetPlanButton>
            </ButtonWrapper>
        </div>
    );
}

export default Dashboard;