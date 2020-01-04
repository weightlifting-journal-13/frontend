import React, {useState, useEffect} from 'react';
import {data} from '../data';

const CreatePlan = () => {
     const [workoutPlan, setWorkoutPlan] = useState(data)
    // 0) Prereq. Given the "bodypart", such as "chest"
    // const bodypart = "legs"; // from set state of the <select />

    //set up useEffect --> watch two things: 1. bodpyarts, 2. exercises

    workoutPlan.filter(plan => console.log(plan))

   //NATE:
/**
 * data  -state (check)
 * map through and create a list that has check box that has a helper function that changes your state.
 * 
 *     {
            bodypart: 'chest',
            exercises: ['flat bench press', 'incline bench press', 'decline bench press', 'push ups', 'flat dumbell press', 'incline dumbell press', 'dips', 'cable crossovers']
         },

        usestate = {
             chest:{
                 isSelected:false,
                 exercises:{
                     flat_Bench_Press:{
                         isSelected:false,
                         exercisename: "Flat Bench Press"
                     }
                 }
             }
         }
 * 

 handleInputBodyPart --> 
 setWorkoutPlan({
    state[e.target.name]= {
        ...state[e.target.name]
        isClicked:!state[e.target.name]
    }
 })
  
 */
    return (
        <div>
            <h1>Create new plan component</h1>
            <form>
                <h3>Name your workout plan</h3>
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