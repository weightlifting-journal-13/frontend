import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Link to='/Dashboard'>Dashboard</Link>
            <Link to='/CreatePlan'>Create plan</Link>
            <Link to='/MyPlans'>My Plans</Link>
        </div>
     );
}
 
export default Navigation;