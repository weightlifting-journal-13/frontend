import React from 'react';

import { NavigationWrapper, LogoutButton, LinkStyle } from '../StyledComponents/StyledComponents';


const Navigation = (props) => {

    const logout = (event) => {
        event.preventDefault();

        localStorage.removeItem('token')
        props.history.push('/')
    }

    return (
        <NavigationWrapper>
            <LinkStyle to={`/Dashboard`}>Dashboard</LinkStyle>
            <LinkStyle to={`/MyPlans`}>My Plans</LinkStyle>
            <LinkStyle to={`/CreatePlan`}>Create plan</LinkStyle>
            <LinkStyle to={`/PresetPlans`}>Preset plans</LinkStyle>
            <LinkStyle to={`/Profiles`}>Profiles</LinkStyle>
            <LogoutButton onClick={logout} >Logout</LogoutButton>
        </NavigationWrapper>
    );
}

export default Navigation;