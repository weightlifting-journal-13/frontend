import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { data } from '../data';
import PlanCard from './PlanCard';

const PresetPlans = () => {

  const [bodyPart, setBodyPart] = useState(data)

  useEffect(() => {
    const getAllWorkouts = () => {
      axiosWithAuth()
        .get('/workouts/all_workouts', {user_id: localStorage.getItem("user_id")})
        .then(res => {
          console.log(res)
          setBodyPart(res);
        })
        .catch(error => {
          console.log('results not found', error)
        });
    }

    getAllWorkouts();
  }, [])

    
    return ( 

      //Card should consist of workout plan name and workoutdescription
      //but that state is declared in CreatePlan

      // const [workoutPlan, setWorkoutPlan] = useState({
      //   workoutplan: '',
      //   workoutdescription: '',

      <div>
        {/* {bodyPart.map((obj, index) => (
          <PlanCard 
            key={index}
            bodypart={obj.bodypart}
          />
        ))} */}

        {/* {mapDataObject(bodyPart, (key, value) => 
          <PlanCard 
            part={key}
            bodypart={value.bodypart}
          />
        )} */}
        </div>
     );
}
 
export default PresetPlans;