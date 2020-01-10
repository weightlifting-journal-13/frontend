import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FormWrapper, FormContainer, TextInput, SelectInput, WorkoutPlanInput, ButtonStyle, AddButton, DeleteButton, CardWrapper, CardContainer, CardTextSpan, CardTextStyle, LabelStyle } from '../StyledComponents/StyledComponents';

import { useContext } from 'react';
import { store } from "../reducers/WorkoutReducer";

const EditWorkoutPlan = (props) => {
    const { dispatch } = useContext(store);


    const [workoutPlan, setWorkoutPlan] = useState({
        user_id: Number(localStorage.getItem("user_id")),
        workout_name: '',
        workout_description: '',
        records: []
    });

    const [lastRegion, setLastRegion] = useState("")

    const [prefabOptions, setPrefabOptions] = useState([{
        exercise_id: 0,
        name: "Waiting on the API!",
        target_region: "",
    }]);

    //gets WorkoutPlan and all exercises associated to specific plan by dynamic ID
    /*useEffect(() => {
        axiosWithAuth()
            .get(`/workouts/all_workouts`)
            .then(response => {
                console.log('EDIT RESPONSE IS HERE:'response)

                // need to wait for api endpoint structure
                // setWorkoutPlan(response.data)
            })
            .catch(error => {
                console.log('Sorry, no workout id returned', error)
            })
.
    }, [props.match.params.id]) */

    //gets exercise list
    useEffect(() => {
        axiosWithAuth()
            .get("/workouts/exercises")
            .then((response) => {
                console.log("EXERCISE LIST RESPONSE IS: ", response);
                setPrefabOptions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const [formData, setFormData] = useState({
        // workoutplan: '',
        // workout_description: '',
        exercise_id: 1,
        sets: 0,
        reps: 0,
        weight: 0,
        rest_time: '',
        suggested_order: 0,
        workout_id: 0
    })

    //use Object.values to convert to array so we can map it
    const result = Object.values(workoutPlan)
    // console.log(result)
    // console.log(formData, 'FormData Todd is here')
    // console.log("WORKOUT PLAN IS NOW ", workoutPlan);

    const addToPlan = (event) => {
        event.persist();
        event.stopPropagation()
        console.log(event);

        event.preventDefault();

        if (formData.sets && formData.reps && formData.weight && formData.rest_time && formData.suggested_order && formData.exercise_id) {
            setWorkoutPlan({
                //need to add suggested order text box 
                user_id: workoutPlan.user_id,
                workout_name: workoutPlan.workout_name,
                workout_description: workoutPlan.workout_description,
                records: [...workoutPlan.records, {
                    exercise_id: formData.exercise_id,
                    sets: Number(formData.sets),
                    reps: Number(formData.reps),
                    weight: Number(formData.weight),
                    rest_time: formData.rest_time,
                    suggested_order: Number(formData.suggested_order),
                    id: Date.now()
                }],
            });
            setFormData({
                exercise_id: 1,
                sets: 0,
                reps: 0,
                weight: 0,
                rest_time: '',
                suggested_order: 0
            })
        };
    };

    //deletePlan --> need to remove a exercise from the page (need an ID)
    const handleDeleteExercise = (event, id) => {
        event.preventDefault();
        event.stopPropagation()

        const filteredExercise = workoutPlan.records.filter(item => item.id !== id)
        setWorkoutPlan({
            ...workoutPlan,
            records: filteredExercise
        })
    }

    // 2. handleInputChanges --> for text inputs
    const handleInputChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // console.log("FORM DATA IS NOW: ",
        //     {
        //         ...formData,
        //         [e.target.name]: e.target.value
        //     }
        // )
    }

    const handleInputWorkoutName = (event) => {
        setWorkoutPlan({
            ...workoutPlan,
            [event.target.name]: event.target.value
        })
    }

    // 4. onSubmit form to post new workoutPlan to api
    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        e.stopPropagation()
        console.log(workoutPlan);

        const modifiedRecords = workoutPlan.records.map((record) => {
            const { workout_id, exercise, ...rest } = record;
            return (rest);
        });

        const planToSend = { ...workoutPlan, records: [...modifiedRecords] }

        console.log("PLAN TO SEND IS: ", planToSend);

        //axiosWithAuth to post new/add new workout
        if (workoutPlan.user_id && workoutPlan.workout_name && workoutPlan.workout_description && workoutPlan.records) {
            const modifiedRecordsArray = workoutPlan.records.map(eachObj => {
                return {
                    exercise_id: eachObj.exercise_id,
                    rest_time: eachObj.rest_time,
                    sets: eachObj.sets,
                    reps: eachObj.reps,
                    weight: eachObj.weight,
                    suggested_order: eachObj.suggested_order
                }
            })

            const objToSubmit = {
                ...workoutPlan,
                records: modifiedRecordsArray
            }
            console.log(objToSubmit);
            axiosWithAuth()
                .post('/workouts/create', planToSend)
                .then(response => {
                    console.log("WORKOUT CREATE RESPONSE: ", response);
                    dispatch({ type: "ADD_WORKOUT_SUCCESS", payload: response.data });
                    setFormData(response)
                    //set workoutPlan checkboxes to false
                    // setWorkoutPlan(
                    //     workoutPlan(false)
                    //  )
                    /// setformData inputs back to empty strings
                    setFormData({
                        exercise_id: 1,
                        workout_name: '',
                        workout_description: '',
                        sets: 0,
                        reps: 0,
                        weight: 0,
                        rest_time: '',
                        suggested_order: 0
                    })

                    setWorkoutPlan({
                        user_id: 0,
                        workout_name: '',
                        workout_description: '',
                        records: []
                    })
                    //redirect to MyPlans component
                    props.history.push('/MyPlans')
                })
                .catch(error => {
                    console.log('Sorry, workout plan not created', error)
                })
        }
        else {
            console.log("API POST DID NOT FIRE! \n USER_ID: ", workoutPlan.user_id, "WORKOUT_NAME: ", workoutPlan.workout_name, "WORKOUT_DESCRIPTION: ", workoutPlan.workout_description, "RECORDS: ", workoutPlan.records);
        }
    }
    return (
        <div>
            <h1>Update your workout plan!</h1>
            <form onSubmit={handleOnSubmitForm} >
                <div>
                    <WorkoutPlanInput
                        type='text'
                        name='workout_name'
                        placeholder='Name your workout plan'
                        value={workoutPlan.workout_name}
                        onChange={handleInputWorkoutName}
                    />
                    <WorkoutPlanInput
                        type='text'
                        name='workout_description'
                        placeholder='Add plan description'
                        value={workoutPlan.workout_description}
                        onChange={handleInputWorkoutName}
                    />
                </div>
                <div>
                    <FormWrapper>
                        <h3>Add or remove exercises from your plan</h3>
                        <FormContainer>
                            <LabelStyle>Exercise name</LabelStyle>
                            {/* <TextInput
                                type='text'
                                name='exercise'
                                placeholder='Exercise'
                                value={formData.exercise}
                                onChange={handleInputChanges}
                            /> */}
                            {/* Add select options here for workout list */}
                            {/* /workouts/exercises */}
                            <SelectInput name='exercise_id' onChange={handleInputChanges}>
                                {prefabOptions.map((exerciseOption, index) => (


                                    <option key={index} name={`${exerciseOption.name}`} value={exerciseOption.exercise_id}>{exerciseOption.name}</option>
                                ))};
                            </SelectInput>

                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Number of sets</LabelStyle>
                            <TextInput
                                type='number'
                                name='sets'
                                placeholder='Number of sets'
                                value={formData.sets}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Number of reps</LabelStyle>
                            <TextInput
                                type='number'
                                name='reps'
                                placeholder='Number of reps'
                                value={formData.reps}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>lbs-optional</LabelStyle>
                            <TextInput
                                type='number'
                                name='weight'
                                placeholder='lbs lifted'
                                value={formData.weight}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Length of rest</LabelStyle>
                            <TextInput
                                type='number'
                                name='rest_time'
                                placeholder='0'
                                value={formData.rest_time}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Order</LabelStyle>
                            <TextInput
                                type='number'
                                name='suggested_order'
                                placeholder='Order of exercises'
                                value={formData.suggested_order}
                                onChange={handleInputChanges}
                            />
                        </FormContainer>
                        <FormContainer>
                            <AddButton onClick={addToPlan}>Add exercise</AddButton>
                        </FormContainer>
                    </FormWrapper>
                    <h3>{workoutPlan.records.length > 0 ? `Your exercises for your ${workoutPlan.workout_name} plan` : `Please add an exercise to your plan`} </h3>
                    {workoutPlan.records.map((exercise, index) => {
                        return (
                            <div key={index}>
                                <CardWrapper>
                                    <CardContainer>
                                        <CardTextStyle><CardTextSpan>Exercise:</CardTextSpan> {prefabOptions[Number(exercise.exercise_id) - 1].name}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Sets:</CardTextSpan> {exercise.sets}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Reps:</CardTextSpan> {exercise.reps}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Weight:</CardTextSpan> {exercise.weight} lbs</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Rest Time:</CardTextSpan> {exercise.rest_time} minutes</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Order:</CardTextSpan> {exercise.suggested_order}</CardTextStyle>
                                        <DeleteButton type="button" onClick={event => handleDeleteExercise(event, exercise.id)} >Delete</DeleteButton>
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