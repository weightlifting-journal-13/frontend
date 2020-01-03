import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={'/Login'} />
                }
                    
            }}
            /*render={props => {
                localStorage.getItem('token')
                    ? <Component {...props} />
                    : <Redirect to={'/Login'} />
            }} */
        />
    );
}

export default PrivateRoute;