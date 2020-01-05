import React, { useState, useEffect } from 'react';
import { data } from '../data';

const CreatePlan = () => {
    const [workoutPlan, setWorkoutPlan] = useState(data)
    // 0) Prereq. Given the "bodypart", such as "chest"
    // const bodypart = "legs"; // from set state of the <select />


    const result = Object.values(workoutPlan)
    console.log(result)

    //NATE:
    /**
     * data  -state (check)
     * map through and create a list that has check box 
     * that has a helper function that changes your state.
     * 
    
     
     handleInputBodyPart --> 
     setWorkoutPlan({
         state[e.target.name]= {
             ...state[e.target.name]
             isSelected:!state[e.target.name]
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

                <h4>Select your exercises</h4>
                
                {
                    result.map((item, index) => {
                        return (
                            <>
                                <input key={index} type='checkbox' />
                                <label>{item.bodypart}</label>
                                <label>Exercise</label>
                                <input
                                    type='text'
                                    name='exercise'
                                    placeholder={item.bodypart}
                                />
                            </>
                        )
                    })
                }

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
                <h4>Create your plan(final step)</h4>
                <button>Create plan</button>
            </form>
        </div >
    );
}

export default CreatePlan;