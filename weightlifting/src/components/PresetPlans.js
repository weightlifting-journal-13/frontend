import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { data } from '../data';
import PlanCard from './PlanCard';

const PresetPlans = () => {

  const [bodyPart, setBodyPart] = useState(data)

//for when the API becomes available
  // useEffect(() => {
  //   const getExercises = () => {
  //     axios
  //       .get('')
  //       .then(res => {
  //         console.log(res)
  //         setExercises(res);
  //         // setFilteredExercises might need to be used
  //       })
  //       .catch(error => {
  //         console.log('results not found', error)
  //       });
  //   }

  //   getExercises();
  // }, [])

//what I needed if data was kept as an object
    // const mapDataObject = (object, cb) => {
    //   Object.keys(object).map((key) => {
    //     cb(key, object[key]);
    //     setBodyPart(key)
    //   });
    // }
    
    return ( 

      //Card should consist of workout plan name and workoutdescription
      //but that state is declared in CreatePlan

      // const [workoutPlan, setWorkoutPlan] = useState({
      //   workoutplan: '',
      //   workoutdescription: '',

      <div>
        {bodyPart.map((obj, index) => (
          <PlanCard 
            key={index}
            bodypart={obj.bodypart}
          />
        ))}

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