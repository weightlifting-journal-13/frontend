import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 3% 0;
    margin: auto;
`
const FormContainer = styled.div`
    margin: 2% 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`

const TextInput = styled.input`
    width: 80%;
    height: 45px;
    border-radius: 5px;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    padding: 0 2%;
    margin: 0 3%;
    margin-top: 3%;
`

const ButtonStyle = styled.button`
    width: 60%;
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
const AddButton = styled.button`
    width: 40%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #3d94ff;
    color: #FFF;
    margin-top: 3%;
`

const DeleteButton = styled.button`
    width: 10%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #ff3d41;
    color: #FFF;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const CardContainer = styled.div`
    border: 1px solid lightgray;
    width: 80%;
    display: flex;
    align-content: center;
    margin: 2% 2%;
    padding: 2% 5%;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const CardTextStyle = styled.p`
    font-size: 1.2rem;
    margin: 2% 2%;
`

const CardTextSpan = styled.span`
    font-weight: bold;
`

const NewPlan = (props) => {
    const [workoutPlan, setWorkoutPlan] = useState({
        workoutplan: '',
        workoutdescription: '',
        exercises: []
    });
    const [formData, setFormData] = useState({
        workoutplan: '',
        workoutdescription: '',
        exercise: '',
        numberofsets: 0,
        numberofreps: 0,
        weightlifted: 0,
        lengthofrest: 0
    })

    //use Object.values to convert to array so we can map it
    const result = Object.values(workoutPlan)
    console.log(result)
    console.log(formData, 'FormData Todd is here')
    console.log("WORKOUT PLAN IS NOW ", workoutPlan);

    const addToPlan = (event) => {
        event.persist();
        event.stopPropagation()
        console.log(event);

        event.preventDefault();
        setWorkoutPlan({
            workoutplan: formData.workoutplan,
            workoutdescription: formData.workoutdescription,
            exercises: [...workoutPlan.exercises, {
                exercise: formData.exercise,
                numberofsets: formData.numberofsets,
                numberofreps: formData.numberofreps,
                weightlifted: formData.weightlifted,
                lengthofrest: formData.lengthofrest,
                id: Date.now()
            }],
        });
        setFormData({
            ...formData,
            workoutplan: '',
            workoutdescription: '',
            exercise: '',
            numberofsets: 0,
            numberofreps: 0,
            weightlifted: 0,
            lengthofrest: 0
        });
    }

    //deletePlan --> need to remove a exercise from the page (need an ID)
    const handleDeleteExercise = (event, id) => {
        event.stopPropagation()
        const filteredExercise = workoutPlan.exercises.filter(item => item.id !== id)
        setWorkoutPlan({
            ...workoutPlan,
            exercises: filteredExercise
        })
    }

    // 2. handleInputChanges --> for text inputs
    const handleInputChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // 4. onSubmit form to post new workoutPlan to api
    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        e.stopPropagation()
        //axiosWithAuth to post new/add new workout
        axiosWithAuth()
            .post('/', workoutPlan)
            .then(response => {
                console.log(response)
                setFormData(response)
                //set workoutPlan checkboxes to false
                // setWorkoutPlan(
                //     workoutPlan(false)
                //  )
                /// setformData inputs back to empty strings
                setFormData({
                    workoutplan: '',
                    workoutdescription: '',
                    exercise: '',
                    numberofsets: 0,
                    numberofreps: 0,
                    weightlifted: 0,
                    lengthofrest: 0
                })
                //redirect to MyPlans component
                props.history.push('/MyPlans')
            })
            .catch(error => {
                console.log('Sorry, workout plan not created', error)
            })
    }
    return (
        <div>
            <h1>New plan component</h1>
            <form onSubmit={handleOnSubmitForm} >
                <div>
                    <TextInput
                        type='text'
                        name='workoutplan'
                        placeholder='Name your workout plan'
                        value={formData.workoutplan}
                        onChange={handleInputChanges}
                    />
                    <TextInput
                        type='text'
                        name='workoutdescription'
                        placeholder='Add plan description'
                        value={formData.workoutdescription}
                        onChange={handleInputChanges}
                    />
                </div>
                <div>
                    <AddButton onClick={addToPlan}>+ Add exercise</AddButton>
                </div>
                <div>
                    <FormContainer>
                        <label>Exercise</label>
                        <TextInput
                            type='text'
                            name='exercise'
                            placeholder='Exercise'
                            value={formData.exercise}
                            onChange={handleInputChanges}
                        />
                    </FormContainer>
                    <FormContainer>
                        <label>Number of sets</label>
                        <TextInput
                            type='number'
                            name='numberofsets'
                            placeholder='0'
                            value={formData.numberofsets}
                            onChange={handleInputChanges}
                        />
                    </FormContainer>
                    <FormContainer>
                        <label>Number of reps</label>
                        <TextInput
                            type='number'
                            name='numberofreps'
                            placeholder='0'
                            value={formData.numberofreps}
                            onChange={handleInputChanges}
                        />
                    </FormContainer>
                    <FormContainer>
                        <label>lbs-optional</label>
                        <TextInput
                            type='number'
                            name='weightlifted'
                            placeholder='0'
                            value={formData.weightlifted}
                            onChange={handleInputChanges}
                        />
                    </FormContainer>
                    <FormContainer>
                        <label>Length of rest</label>
                        <TextInput
                            type='number'
                            name='lengthofrest'
                            placeholder='0 mins'
                            value={formData.lengthofrest}
                            onChange={handleInputChanges}
                        />
                    </FormContainer>

                    <h3>{workoutPlan.exercises.length > 0 ? `Your exercises for your ${workoutPlan.workoutplan} plan` : `Please add an exercise to your plan`} </h3>
                    {workoutPlan.exercises.map((exercise, index) => {
                        return (
                            <div key={index}>
                                <CardWrapper>
                                    <CardContainer>
                                        <CardTextStyle><CardTextSpan>Exercise:</CardTextSpan> {exercise.exercise}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Sets:</CardTextSpan> {exercise.numberofsets}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Reps:</CardTextSpan> {exercise.numberofreps}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Weight:</CardTextSpan> {exercise.weightlifted} lbs</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Rest Time:</CardTextSpan> {exercise.lengthofrest} minutes</CardTextStyle>
                                        <DeleteButton onClick={event => handleDeleteExercise(event, exercise.id)} >Delete</DeleteButton>
                                    </CardContainer>
                                </CardWrapper>
                            </div>
                        )
                    })}
                    <div>
                        <ButtonStyle type='submit'>Create plan</ButtonStyle>
                    </div>
                </div>
            </form>
        </div >
    );
}
export default NewPlan;