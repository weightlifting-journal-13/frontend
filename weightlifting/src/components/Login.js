import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = () => {
    // make post request to receive token from api
    //handle the token, navigate to 'Dashboard' component page


    //setup useState to store inital state/data


    //handleInputChanges


    //handleLoginSubmit
    //use axiosWithAuth --> all done inside handleLoginSubmit
    //successful post --> props.history.push('/Dashboard')


    return (
        <div>
            <h1>Please login</h1>
            <form>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                //value={}
                //onChange={}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                //value={}
                //onChange={}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                //value={}
                //onChange={}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;