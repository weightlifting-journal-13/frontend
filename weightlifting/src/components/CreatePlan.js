import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { data } from '../data';

const CreatePlan = (props) => {
    const [workoutPlan, setWorkoutPlan] = useState(data ? Object.values(data) : [])
    const [exercises, setExercises] = useState([]);
    const [trigger, setTrigger] = useState(false)
    const [formData, setFormData] = useState({
        workoutplan: '',
        workoutdescription: '',
        exercise: '',
        numberofsets: '0',
        numberofreps: '0',
        weightlifted: '0',
        lengthofrest: '0'
    })
    useEffect(() => {
        console.log('running')
        if (data && (workoutPlan.length === 0)) {
            setWorkoutPlan(Object.values(data));
        } else {
            const filtered = workoutPlan.filter(eachObj => eachObj.isSelected === true);

            const exerciseArray = [];
            for (let i = 0; i < filtered.length; i++) {
                exerciseArray.push(Object.values(filtered[i].exercises))
            }
            setExercises(exerciseArray);
            console.log(exerciseArray)
        }
    }, [data, workoutPlan, trigger])

    //use Object.values to convert to array so we can map it
    const result = Object.values(workoutPlan)
    console.log(result)

    //NATE:
    /*
     * 1. data  -state (check)
     * 2. map through and create a list that has check box  (check)
     * 3. create onChanger handler for form data text inputs (check)
     * 4. create onChange handler for checkbox inputs
     * 5. create onSubmit handler to post to api (check)
     * 6. set up useEffect to watch for changes in 'workoutPlan': 1. bodypart, 2: exercises (check)
     * 7. correct api endpoint to post data
     */

    // 2. handleInputChanges --> for text inputs
    const handleInputChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //  3. handleInputBodyPart --> for checkbox inputs
    //  const handleInputBodyPart = (e) => {
    //     setWorkoutPlan({
    //         state[e.target.name] = {
    //             ...state,
    //             [e.target.name],
    //             isSelected:!state[e.target.name]
    //            }
    //        })
    //  }  
    const selectregion = (e) => {
        e.stopPropagation()
        e.persist();

        console.log(e);

        let copy = workoutPlan[Number(e.target.id)]
        copy = {
            ...copy,
            isSelected: !copy.isSelected
        };
        workoutPlan.splice((e.target.id), 1, copy)
        setWorkoutPlan(
            workoutPlan
        )
        setTrigger(!trigger)
        console.log(workoutPlan, 'inside Bobb')
    }

    // 4. onSubmit form to post new workoutPlan to api
    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        e.stopPropagation()

        //axiosWithAuth to post new/add new workout
        axiosWithAuth()
            .post('/', formData)
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
                console.log('Sorry, workout plan not created', error)
            })
    }


    return (
        <div>
            <h1>Create new plan component</h1>
            <form onSubmit={handleOnSubmitForm} >
                <h3>Name your workout plan</h3>
                <input
                    type='text'
                    name='workoutname'
                    placeholder='Name your workout plan'
                    value={formData.workoutname}
                    onChange={handleInputChanges}
                />
                <input
                    type='text'
                    name='description'
                    placeholder='Add plan description'
                    value={formData.description}
                    onChange={handleInputChanges}
                />
                <h4>Select your exercises</h4>
                {workoutPlan.map((item, index) => {
                    return (
                        <div key={index}>
                            <input
                                key={index}
                                id={index}
                                type='checkbox'
                                name={item.bodypart}
                                onClick={selectregion}
                            />
                            <label>{item.bodypart}</label>
                        </div>
                    )
                })}
                <div>
                    {exercises.map((item, index) => {
                        return (
                            <div key={index}>
                                <input
                                    key={index}
                                    id={index}
                                    type='checkbox'
                                    name={item.exercisename}
                                />
                                <label>{item.exercisename}</label>
                            </div>
                        )
                    })}
                </div>
                <h3>Fill out exercises reps</h3>
                <div>
                    <label>Exercise</label>
                    <input
                        type='text'
                        name='exercise'
                        placeholder='Exercise'
                        value={formData.exercise}
                        onChange={handleInputChanges}
                    />
                    <label>Number of sets</label>
                    <input
                        type='number'
                        name='sets'
                        placeholder='0'
                        value={formData.sets}
                        onChange={handleInputChanges}
                    />
                    <label>Number of reps</label>
                    <input
                        type='number'
                        name='reps'
                        placeholder='0'
                        value={formData.reps}
                        onChange={handleInputChanges}
                    />
                    <label>lbs-optional</label>
                    <input
                        type='number'
                        name='weight'
                        placeholder='0'
                        value={formData.weight}
                        onChange={handleInputChanges}
                    />
                    <label>Length of rest</label>
                    <input
                        type='number'
                        name='rest'
                        placeholder='0 mins'
                        value={formData.rest}
                        onChange={handleInputChanges}
                    />
                    <h4>Create your plan(final step)</h4>
                    <button type='submit'>Create plan</button>
                </div>
            </form>
        </div >
    );
}

export default CreatePlan;