import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Link to={`/Dashboard`}>Dashboard</Link>
            <Link to={`/MyPlans`}>My Plans</Link>
            <Link to={`/CreatePlan`}>Create plan</Link>
            <Link to={`/PresetPlans`}>Preset plans</Link>
            <Link to={`/Profiles`}>Profiles</Link>
        </div>
     );
}
 
export default Navigation;