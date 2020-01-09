import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                console.log("PROPS ARE: ", props);
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else if (props.location.pathname !== "/Registration") {
                    return <Redirect to={'/'} />
                }
            }}
        />
    );
}

export default PrivateRoute;