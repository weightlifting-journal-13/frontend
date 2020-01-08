import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2% 0;
    background: #00aced;

    .selected{
        text-decoration: underline;
    }
`

const LogoutButton = styled.button`
    width: 10%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #01acee;
    color: #FFF;
    margin-left: 5%;
    border: 2px solid #FFF;
    
`

const LinkStyle = styled(NavLink).attrs(() => ({ activeClassName: 'selected' }))`
    text-decoration: none;
    color: #FFF;
    padding:0 3%;
    font-size: 1.4rem;
    font-weight: bold;

    &:active {
      border-bottom: 5px solid #663399;
  }
`

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