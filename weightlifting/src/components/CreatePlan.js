import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FormWrapper, FormContainer, TextInput, SelectInput, WorkoutPlanInput, ButtonStyle, AddButton, DeleteButton, CardWrapper, CardContainer, CardTextSpan, CardTextStyle, LabelStyle } from '../StyledComponents/StyledComponents';


const CreatePlan = (props) => {
    const [workoutPlan, setWorkoutPlan] = useState({
        user_id: 0,
        workout_name: '',
        workout_description: '',
        records: []
    });
    const [formData, setFormData] = useState({
        // workoutplan: '',
        // workout_description: '',
        exercise_id: 1,
        exercise: '',
        sets: 0,
        reps: 0,
        weight: 0,
        rest_time: '',
        suggested_order: 0
    })

    //use Object.values to convert to array so we can map it
    const result = Object.values(workoutPlan)
    // console.log(result)
    // console.log(formData, 'FormData Todd is here')
    console.log("WORKOUT PLAN IS NOW ", workoutPlan);

    const addToPlan = (event) => {
        event.persist();
        event.stopPropagation()
        console.log(event);

        event.preventDefault();

        if (formData.exercise && formData.sets && formData.reps && formData.weight && formData.rest_time && formData.suggested_order) {
            setWorkoutPlan({
                //need to add suggested order text box 
                user_id: workoutPlan.user_id,
                workout_name: workoutPlan.workout_name,
                workout_description: workoutPlan.workout_description,
                records: [...workoutPlan.records, {
                    exercise_id: formData.exercise_id,
                    exercise: formData.exercise,
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
    }

    //deletePlan --> need to remove a exercise from the page (need an ID)
    const handleDeleteExercise = (event, id) => {
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

        //axiosWithAuth to post new/add new workout
        axiosWithAuth()
            .post('/workouts/create', workoutPlan)
            .then(response => {
                console.log(response)
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
    return (
        <div>
            <h1>Create your custom workout plan</h1>
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
                        <h1>Add your custom exercises to your plan</h1>
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
                            <SelectInput name='exercise' onChange={handleInputChanges}>
                                <option name='chest' selected disabled>Select an exercise</option>
                                {/* chest */}
                                <option name='chest' disabled>CHEST</option>
                                <option name='flatbenchpress'>Flat Bench Press</option>
                                <option name='inclinebenchpress'>Incline Bench Press</option>
                                <option name='declinebenchpress'>Decline Bench Press</option>
                                <option name='pushups'>Push Ups</option>
                                <option name='flatdumbbellpress'>Flat Dumbbell Press</option>
                                <option name='dips'>Dips</option>
                                <option name='cablecrossovers'>Cable CrossOvers</option>
                                <option name='dumbbellflys'>Dumbbell Flys</option>
                                {/* legs */}
                                <option name='legs' disabled>LEGS</option>
                                <option name='squat'>Squat</option>
                                <option name='deadlifts'>Deadlifts</option>
                                <option name='lunges'>Lunges</option>
                                <option name='legcurls'>Leg Curls</option>
                                <option name='hamstringcurls'>Hamstring Curls</option>
                                <option name='calfraises'>Calf Raises</option>
                                <option name='hungariansquat'>Hungarian Squat</option>
                                <option name='sumosquat'>Sumo Squat</option>
                                {/* shoulders */}
                                <option name='shoulders' disabled>SHOULDERS</option>
                                <option name='seatedpress'>Seated Press</option>
                                <option name='uprightrow'>Upright Row</option>
                                <option name='cableraises'>Cable Raises</option>
                                <option name='sideraises'>Side Raises</option>
                                <option name='kettlebellswing'>Kettle Bell Swing</option>
                                <option name='barbelloverheadpress'>Barbell Overhead Press</option>
                                {/* back */}
                                <option name='back' disabled>BACK</option>
                                <option name='latpulldowns'>Lat Pull Downs</option>
                                <option name='seatedrow'>Seated Row</option>
                                <option name='bentoverdumbbellrow'>Bent Over Dumbbell Row</option>
                                <option name='lowerbackraises'>Lower Back Raises</option>
                                <option name='standingpullups'>Standing Pull Ups</option>
                                <option name='goodmorning'>Good Morning</option>
                                <option name='widegrippullups'>Wide Grip Pullups</option>
                                <option name='shrugs'>Shrugs</option>
                                <option name='dumbbelldeadrow'>Dumbbell Dead Row</option>
                                <option name='barbellrow'>BarBell Row</option>
                                {/* triceps */}
                                <option name='triceps' disabled>TRICEPS</option>
                                <option name='standingcableextensions'>Standing Cable Extensions</option>
                                <option name='skullcrusher'>Skull Crusher</option>
                                <option name='bentoverdumbbellextension'>Bent Over Dumbbell Extensions</option>
                                <option name='dips'>Dips</option>
                                <option name='weightedpushup'>Weighted Pushup</option>
                                <option name='closegrippinpress'>Close Grip Pin Press</option>
                                <option name='triceppushaways'>Tricep Pushaways</option>
                                <option name='dragpushdowns'>Drag Pushdowns</option>
                                {/* biceps */}
                                <option name='biceps' disabled>BICEPS</option>
                                <option name='dumbbellcurls'>Dumbbell Curls</option>
                                <option name='preachercurls'>Preacher Curls</option>
                                <option name='hammercurls'>Hammer Curls</option>
                                <option name='weightedchinups'>Weighted Chin Ups</option>
                                {/* abs/core */}
                                <option name='abscore' disabled>ABS/CORE</option>
                                <option name='situps'>Sit Ups</option>
                                <option name='declinesitups'>Decline Sit Ups</option>
                                <option name='dragonflags'>Dragon Flags</option>
                                <option name='bicyclecrunches'>Bicycle Crunches</option>
                                <option name='russiantwist'>Russian Twist</option>
                                <option name='hanginglegraises'>Hanging Leg Raises</option>
                                <option name='hangingkneeraises'>Hanging Knee Raises</option>
                                <option name='declinereversecrunches'>Decline Reverse Crunches</option>
                                {/* stretches */}
                                <option name='stretches' disabled>STRETCHES</option>
                                <option name='standinghamstringstretch'>Standing Hamstring Stretch</option>
                                <option name='standingquadstretch'>Standing Quad Stretch</option>
                                <option name='piriformisstretch'>Piriformis Stretch</option>
                                <option name='lungewithspinaltwist'>Lunge With Spinal Twist</option>
                                <option name='tricepsstretch'>Triceps Stretch</option>
                                <option name='figurefourstretch'>Figure Four Stretch</option>
                                <option name='frogstretch'>Frog Stretch</option>
                                <option name='butterflystretch'>Butterfly Stretch</option>
                                <option name='sidebendstretch'>Side Bend Stretch</option>
                                <option name='lunginghipflexorstretch'>Lunging Hip Flexor Stretch</option>
                                <option name='kneetocheststretch'>Knee To Chest Stretch</option>
                                {/* functional */}
                                <option name='functional' disabled>FUNCTIONAL TRAINING</option>
                                <option name='sledpush'>Sled Push</option>
                                <option name='tireflips'>Tire Flips</option>
                                <option name='boxjumps'>Box Jumps</option>
                                <option name='kettlebellswings'>Kettle Bell Swings</option>
                                <option name='sledpull'>Sled Pull</option>
                                <option name='sledrows'>Sled Rows</option>
                                <option name='sledlunge'>Sled Lunge</option>
                                <option name='sledbearcrawl'>Sled Bear Crawl</option>
                                {/* bodyweight */}
                                <option name='bodyweight' disabled>BODYWEIGHT</option>
                                <option name='airsquat'>Air Squat</option>
                                <option name='burpees'>urpees</option>
                                <option name='walkinglunges'>Walking Lunges</option>
                                <option name='singlelegsquat'>Single Leg Squat</option>
                                <option name='pushups'>Pushupst</option>
                                <option name='lateralsquat'>Lateral Squat</option>
                                <option name='staticlunge'>Static Lunge</option>
                                <option name='singlelegdeadlift'>Single Leg Deadlift</option>
                                <option name='scissorkicks'>Scissor Kicks</option>
                                <option name='bulgariansplitsquat'>Bulgarian Split Squat</option>
                                <option name='singlelegboxsquat'>Single Leg Box Squat</option>
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                        <CardTextStyle><CardTextSpan>Exercise:</CardTextSpan> {exercise.exercise}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Sets:</CardTextSpan> {exercise.sets}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Reps:</CardTextSpan> {exercise.reps}</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Weight:</CardTextSpan> {exercise.weight} lbs</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Rest Time:</CardTextSpan> {exercise.rest_time} minutes</CardTextStyle>
                                        <CardTextStyle><CardTextSpan>Order:</CardTextSpan> {exercise.suggested_order}</CardTextStyle>
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
export default CreatePlan;