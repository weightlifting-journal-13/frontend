import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { data } from '../data';
import PlanCard from './PlanCard';

const PresetPlans = () => {

  const [bodyPart, setBodyPart] = useState(data)

  useEffect(() => {
      axiosWithAuth()
        .get('/workouts/all_workouts', {user_id: localStorage.getItem("user_id")})
        .then(res => {
          console.log(res)
          setBodyPart(res);
        })
        .catch(error => {
          console.log('results not found', error)
        });
  }, [])

    
    return (
      <div>
        {bodyPart.map((obj, index) => (
          <PlanCard 
            key={index}
            bodypart={obj.bodypart}
          />
        ))}
        </div>
     );
}
 
export default PresetPlans;