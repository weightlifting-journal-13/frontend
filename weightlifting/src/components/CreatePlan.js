import React, {useState, useEffect} from 'react';
import {data} from '../data';

const CreatePlan = () => {
     const [workoutPlan, setWorkoutPlan] = useState(data)
    // 0) Prereq. Given the "bodypart", such as "chest"
    // const bodypart = "legs"; // from set state of the <select />

    //set up useEffect --> watch two things: 1. bodpyarts, 2. exercises

    const result = Object.entries(workoutPlan)
    const mappedWorkoutPlan = result.map(item => item)
    console.log(mappedWorkoutPlan)
    
   //NATE:
/**
 * data  -state (check)
 * map through and create a list that has check box that has a helper function that changes your state.
 * 
 *     
        data = {
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
                    <label>Chest</label>
                    <input 
                        type='checkbox'
                        name='chest'
                        //value={}
                    />
                    <label>Legs</label>
                    <input 
                        type='checkbox'
                        name='legs'
                        //value={}
                    />
                    <label>Shoulders</label>
                    <input 
                        type='checkbox'
                        name='shoulders'
                        //value={}
                    />
                    <label>Back</label>
                    <input 
                        type='checkbox'
                        name='back'
                        //value={}
                    />
                    <label>Triceps</label>
                    <input 
                        type='checkbox'
                        name='triceps'
                        //value={}
                    />
                    <label>Biceps</label>
                    <input 
                        type='checkbox'
                        name='biceps'
                        //value={}
                    />
                    <label>Abs/Core</label>
                    <input 
                        type='checkbox'
                        name='core'
                        //value={}
                    />
                    <label>Cardio</label>
                    <input 
                        type='checkbox'
                        name='cardio'
                        //value={}
                    />
                    <label>Circuit</label>
                    <input 
                        type='checkbox'
                        name='circuits'
                        //value={}
                    />
                    <label>Functional Training</label>
                    <input 
                        type='checkbox'
                        name='training'
                        //value={}
                    />
                    <label>Stretching</label>
                    <input 
                        type='checkbox'
                        name='stretching'
                        //value={}
                    />
                    <label>Bodyweight</label>
                    <input 
                        type='checkbox'
                        name='bodyweight'
                        //value={}
                    />
                <h4>Select your exercises(from data file)</h4>
                <h3>Fill out exercises reps</h3>
    
                <label>Exercise</label>
                <input 
                    type='text'
                    name='exercise'
                    placeholder='Bench press(autopopulate)'
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