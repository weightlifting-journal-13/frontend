import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { data } from '../data';

const NewPlan = (props) => {
    const [workoutPlan, setWorkoutPlan] = useState(data ? Object.values(data) : [])
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
                    <input
                        type='text'
                        name='workoutplan'
                        placeholder='Name your workout plan'
                        value={formData.workoutplan}
                        onChange={handleInputChanges}
                    />
                    <input
                        type='text'
                        name='workoutdescription'
                        placeholder='Add plan description'
                        value={formData.workoutdescription}
                        onChange={handleInputChanges}
                    />
                </div>
                <div>
                    <button>+ Add exercise</button>
                </div>
                <div>
                    <label>Exercise</label>
                    <input
                        type='text'
                        name='exercise'
                        placeholder='Exercise'
                        value={formData.exercisename}
                        onChange={handleInputChanges}
                    />
                    <label>Number of sets</label>
                    <input
                        type='number'
                        name='numberofsets'
                        placeholder='0'
                        value={formData.numberofsets}
                        onChange={handleInputChanges}
                    />
                    <label>Number of reps</label>
                    <input
                        type='number'
                        name='numberofreps'
                        placeholder='0'
                        value={formData.numberofreps}
                        onChange={handleInputChanges}
                    />
                    <label>lbs-optional</label>
                    <input
                        type='number'
                        name='weightlifted'
                        placeholder='0'
                        value={formData.weightlifted}
                        onChange={handleInputChanges}
                    />
                    <label>Length of rest</label>
                    <input
                        type='number'
                        name='lengthofrest'
                        placeholder='0 mins'
                        value={formData.lengthofrest}
                        onChange={handleInputChanges}
                    />
                    <button>Delete</button>
                    <h3>Array where exercises are added listed below in queue</h3>
                    <div>
                        <button type='submit'>Create plan</button>
                    </div>
                </div>
            </form>
        </div >
    );
}

export default NewPlan;