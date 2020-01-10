import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import { SearchBar } from '../StyledComponents/StyledComponents';
import UserResult from './UserResult';

const Profiles = () => {
  
  //temporary state for creating searchform may request state of users via contextAPI if needed
  const [profiles, setProfiles] = useState(['BigJoe777', 'Lawrence Gibson', 'Amelia Earhart', 'Judy Rivera'])

  const [filteredProfiles, setFilteredProfiles] = useState([])

  const search = (input) => {
    if (!input){              //if the input is falsey show existing empty array
      setFilteredProfiles([])
    } else {
      const filteredArr = profiles.filter(prof => {
        return prof.toLowerCase().match(input.toLowerCase()) //return characters with values greater than falsey
      })

      setFilteredProfiles(filteredArr)
    }
  }

  return ( 
    <div>
        <h1>Search to view other profile workouts</h1>

        <form >
            <SearchBar
                type='text'
                name='searchPlan'
                placeholder='search a user'
                onChange={(e) => {
                e.preventDefault();
                search(e.target.value)
                }}
            />
        </form>

        {filteredProfiles.map((user) => (
          <UserResult userName={user}/>
        ))}

    </div>
  );
}
 
export default Profiles;