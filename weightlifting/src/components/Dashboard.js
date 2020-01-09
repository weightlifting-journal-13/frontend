import React from 'react';
import styled from 'styled-components';

const PresetPlanButton = styled.button`
    width: 20%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: salmon;
    color: #FFF;
    margin-top: 3%;
`
const CustomPlanButton = styled.button`
    width: 20%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #5ccc6e;
    color: #FFF;
    margin-top: 3%;
`
const ImageWrapper = styled.img`
    width: 50%;
    border-radius: 5px;
`

const ButtonWrapper = styled.div`
   border: 1px solid red;
   display: flex;
   margin-top: 2%;
   
`

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