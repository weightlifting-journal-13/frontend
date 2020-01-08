import React, { useState, UseEffect } from 'react';
import Navigation from './Navigation';
import { data } from '../data';

const PresetPlans = () => {

  const [Exercises, setExercises] = useState(data)

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

    return ( 
        <div>
            <Navigation />
            {Exercises.map((part, index) => (
              <PlanCard 
                part={part}
                key={index}
              />
            ))}
        </div>
     );
}
 
export default PresetPlans;