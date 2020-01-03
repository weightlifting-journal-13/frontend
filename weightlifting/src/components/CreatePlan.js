import React from 'react';

const CreatePlan = () => {
    //setup useState to create data for select options
    //need to dynamically map over bodyparts to create 'option' exercises associated with that specific body party
    const data = [
        {
            bodypart: 'chest',
            exercises: ['flat bench press', 'incline bench press', 'decline bench press', 'push ups', 'flat dumbell press', 'incline dumbell press', 'dips', 'cable crossovers']
        },
        {
            bodypart: 'legs',
            exercises: ['squats', 'lunges', 'deadlifts', 'leg curls', 'hamstring curls', 'sumo squat', 'calf raises']
        },
        {
            bodypart: 'shoulders',
            exercises: ['seated press', 'upright rows', 'cable raises', 'side raises', 'kettle bell swings']
        }
    ]

   
    // const exerciseList = data.exercises.map((item, index) => {
    //     return (
    //         <option key={index}>{item.exercises}</option>
    //     )
    // })

    return (
        <div>
            <h1>Create new plan component</h1>
            <form>
                <h3>Create your workout plan</h3>
                <input
                    type='text'
                    name='workoutname'
                    placeholder='Name your workout plan'
                //value={}
                //onChange={}
                />
                <input
                    type='text'
                    name='description'
                    placeholder='Add plan description'
                //value={}
                //onChange={}
                />
                <h3>Select your body part</h3>
                <select>
                    <option>Select your body part</option>
                    <option>Chest</option>
                    <option>Shoulders</option>
                    <option>Back</option>
                    <option>Triceps</option>
                    <option>Biceps</option>
                    <option>Abs/Core</option>
                    <option>Cardio</option>
                    <option>Curcuits</option>
                    <option>Functional training</option>
                    <option>Stretching</option>
                    <option>Bodyweight</option>
                </select>
                <h4>Select your exercises(dynamically create)</h4>
                {/* <select>{exerciseList}</select> */}
                <h3>Fill out exercises reps</h3>
                <input 
                    type='text'
                    name='exercise'
                    placeholder='Exercise'
                    //value={}
                    //onChange={}
                />
                <button type='submit'>+ Exercise</button>
                <h3>Create your plan(exercises add here to array --> create plan</h3>
                <label>Exercise</label>
                <input 
                    type='text'
                    name='exercise'
                    placeholder='Excercise'
                />
                <label>Number of sets</label>
                <input 
                    type='number'
                    name='sets'
                    placeholder='Number'
                />
                <label>Number of reps</label>
                <input 
                    type='number'
                    name='sets'
                    placeholder='Number'
                />
                <label>lbs-optional</label>
                <input 
                    type='number'
                    name='reps'
                    placeholder='weight'
                />
                <button>Create plan</button>
            </form>
        </div>
    );
}

export default CreatePlan;