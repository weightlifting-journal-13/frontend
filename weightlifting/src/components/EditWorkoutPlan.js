import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 3% 0;
    /* border: 1px solid green; */
    justify-content: center;
 `

const FormContainer = styled.div`
    margin: 1% 0;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;   
    /* border: 2px solid blue;  */
`

const TextInput = styled.input`
    margin: 0 1%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

const WorkoutPlanInput = styled.input`
    width: 40%;
    height: 45px;
    border-radius: 5px;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    padding: 0 2%;
    margin-top: 1%;
    margin: 0% 1%;
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
    width: 25%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #3d94ff;
    color: #FFF;
    margin-top: 2%;
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
    margin-left: 5%;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const CardContainer = styled.div`
    border: 1px solid lightgray;
    width: 100%;
    display: flex;
    align-content: center;
    margin: 2% 2%;
    padding: 2% 1%;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const CardTextStyle = styled.p`
    font-size: 1.2rem;
    /* margin: 2% 2%; */
    /* border: 1px solid red; */
    /* padding: 0% 1%; */
    width: 100%;
`

const CardTextSpan = styled.span`
    font-weight: bold;
    /* border: 1px solid green; */
`

const LabelStyle = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    width: 20%;
    /* border: 1px solid blue; */
    text-align: left;
`

const EditWorkoutPlan = (props) => {
    const [workoutPlan, setWorkoutPlan] = useState({
        workoutplan: '',
        workoutdescription: '',
        exercises: []
    });
    const [formData, setFormData] = useState({
        workoutplan: '',
        workoutdescription: '',
        exercise: '',
        numberofsets: '',
        numberofreps: '',
        weightlifted: '',
        lengthofrest: ''
    })

    //use Object.values to convert to array so we can map it
    const result = Object.values(workoutPlan)
    console.log(result)
    console.log(formData, 'FormData Todd is here')
    console.log("WORKOUT PLAN IS NOW ", workoutPlan);

    //setup useEffect to get a specific 'workoutplan' from the api using a dynamic ID --> ex: /api/users/workoutplan/6


    const addToPlan = (event) => {
        event.persist();
        event.stopPropagation()
        console.log(event);

        event.preventDefault();
        setWorkoutPlan({
            //need to add suggested order text box 
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
            exercise: '',
            numberofsets: '',
            numberofreps: '',
            weightlifted: '',
            lengthofrest: ''
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
            .put(`/users/workoutplan/${props.match.params.id}`, workoutPlan)
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
                    numberofsets: '',
                    numberofreps: '',
                    weightlifted: '',
                    lengthofrest: ''
                })
                //redirect to MyPlans component
                props.history.push('/MyPlans')
            })
            .catch(error => {
                console.log('Sorry, your workout plan not updated', error)
            })
    }
    return (
        <div>
            <h1>Edit your workout plan --> component</h1>
            <form onSubmit={handleOnSubmitForm} >
                <div>
                    <WorkoutPlanInput
                        type='text'
                        name='workoutplan'
                        placeholder='Name your workout plan'
                        value={formData.workoutplan}
                        onChange={handleInputChanges}
                    />
                    <WorkoutPlanInput
                        type='text'
                        name='workoutdescription'
                        placeholder='Add plan description'
                        value={formData.workoutdescription}
                        onChange={handleInputChanges}
                    />
                </div>
                <div>
                    <FormWrapper>
                        <h1>Update your custom exercises</h1>
                        <FormContainer>
                            <LabelStyle>Exercise name</LabelStyle>
                            <TextInput
                                type='text'
                                name='exercise'
                                placeholder='Exercise'
                                value={formData.exercise}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Number of sets</LabelStyle>
                            <TextInput
                                type='number'
                                name='numberofsets'
                                placeholder='Number of sets'
                                value={formData.numberofsets}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Number of reps</LabelStyle>
                            <TextInput
                                type='number'
                                name='numberofreps'
                                placeholder='Number of reps'
                                value={formData.numberofreps}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>lbs-optional</LabelStyle>
                            <TextInput
                                type='number'
                                name='weightlifted'
                                placeholder='lbs lifted'
                                value={formData.weightlifted}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Length of rest</LabelStyle>
                            <TextInput
                                type='number'
                                name='lengthofrest'
                                placeholder='Length of rest'
                                value={formData.lengthofrest}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <AddButton onClick={addToPlan}>Add exercise</AddButton>
                        </FormContainer>
                    </FormWrapper>
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
                        <ButtonStyle type='submit'>Update plan</ButtonStyle>
                    </div>
                </div>
            </form>
        </div >
    );
}
export default EditWorkoutPlan;