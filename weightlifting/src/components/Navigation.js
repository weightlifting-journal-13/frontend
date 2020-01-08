import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavContnr = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  border-radius: 1px;
  box-shadow: 0 10px 11px -10px black;
`
const NavItemContnr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LinksContnr = styled.div`
  justify-content: flex-start;
  align-content: center;
  width: 50%;
`
let navStyles = {
  color: 'black',
  width: '60px',
  height: '30px',
  marginRight: '2%',
  textDecoration: 'none'
}

const Navigation = () => {

  const activeTab = (e) => {

  }

  //give Link a prop of onClick={activeTab}

    return ( 
        <NavContnr>
          <NavItemContnr>
            <LinksContnr>
              <NavLink to={`/Dashboard`} activeStyle={{ borderBottom: "5px solid #663399" }} style={{fontWeight: 'bold', color: 'black', width: '60px', height: '30px', marginRight: '2%', textDecoration: 'none'}}>Dashboard</NavLink>
              <NavLink to={`/MyPlans`} activeStyle={{ borderBottom: "5px solid #663399" }} style={navStyles}>My Plans</NavLink>
              <NavLink to={`/CreatePlan`} activeStyle={{ borderBottom: "5px solid #663399" }} style={navStyles}>Create plan</NavLink>
              <NavLink to={`/PresetPlans`} activeStyle={{ borderBottom: "5px solid #663399" }} style={navStyles}>Preset plans</NavLink>
              <NavLink to={`/Profiles`} activeStyle={{ borderBottom: "5px solid #663399" }} style={navStyles}>Profiles</NavLink>
            </LinksContnr>

            {/* image for logo */}

          </NavItemContnr>  
        </NavContnr>
     );
}
 
export default Navigation;