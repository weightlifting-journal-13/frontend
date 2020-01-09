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

const SelectInput = styled.select`
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

const CreatePlan = (props) => {
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
        lengthofrest: '',
        orderofexercises: ''
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

        if (formData.exercise && formData.numberofsets && formData.numberofreps && formData.weightlifted && formData.lengthofrest && formData.orderofexercises) {
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
                    orderofexercises: formData.orderofexercises,
                    id: Date.now()
                }],
            });
            setFormData({
                ...formData,
                exercise: '',
                numberofsets: '',
                numberofreps: '',
                weightlifted: '',
                lengthofrest: '',
                orderofexercises: ''
            });
        };
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
                    numberofsets: '',
                    numberofreps: '',
                    weightlifted: '',
                    lengthofrest: '',
                    orderofexercises: ''
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
                                name='numberofsets'
                                placeholder='Number of sets'
                                value={formData.numberofsets}
                                onChange={handleInputChanges}
                                required
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
                                required
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
                                required
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
                                required
                            />
                        </FormContainer>
                        <FormContainer>
                            <LabelStyle>Order</LabelStyle>
                            <TextInput
                                type='number'
                                name='orderofexercises'
                                placeholder='Order of exercises'
                                value={formData.orderofexercises}
                                onChange={handleInputChanges}
                                required
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
                                        <CardTextStyle><CardTextSpan>Order:</CardTextSpan> {exercise.orderofexercises}</CardTextStyle>
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