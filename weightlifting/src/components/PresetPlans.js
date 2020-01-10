import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { data } from '../data';
import PlanCard from './PlanCard';

const PresetPlans = () => {

  const [bodyPart, setBodyPart] = useState(data)

  const [workouts, setWorkouts] = useState(data)
  
  useEffect(() => {
      axiosWithAuth()
        .get('/workouts/exercises', {user_id: localStorage.getItem("user_id")})
        .then(res => {
          console.log(res)
          setWorkouts(res.data);
        })
        .catch(error => {
          console.log('results not found', error)
        });
  }, [])

    
    return ( 

      //Card should consist of workout plan name and workoutdescription
      //but that state is declared in CreatePlan

      // const [workoutPlan, setWorkoutPlan] = useState({
      //   workoutplan: '',
      //   workoutdescription: '',

      <div>
        {workouts.map((exercise, index) => (
          <PlanCard 
            key={index}
            bodypart={exercise.target_region}
          />
        ))}
      </div>
     );
}
 
export default PresetPlans;