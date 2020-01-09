import React, { useState, useContext } from 'react';
import { store } from "../reducers/WorkoutReducer";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { LoginWrapper, LoginContainer, LoginImage, LoginImageWrapper, LoginTextInput, ButtonStyle } from '../StyledComponents/StyledComponents';
import cogoToast from "cogo-toast";

const Login = (props) => {
    // make post request to receive token from api
    //handle the token, navigate to 'Dashboard' component page

    const { dispatch } = useContext(store);

    // PLEASE keep these here in case we go plummeting down the rabbit hole again.
    // console.log("GLOBAL STATE IS: ", globalState);
    // console.log(globalState);
    // console.log("USECONTEXT ON STORE LOOKS LIKE THIS: ", useContext(store));

    //setup useState to store inital state/data
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    //handleInputChanges
    const handleInputChanges = (e) => {
        e.persist();
        console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log(credentials)
    }

    const logInValidation = () => {
        let logInPwValid = false;
        let logInUnValid = false;
        credentials.password.length >= "5"
            ? (logInPwValid = true)
            : cogoToast.warn("Sorry, that password is a little short!", {
                position: "bottom-right"
            });
        //check for valid email
        const emailRegEx = /\S+@\S+\.\S+/;
        emailRegEx.test(credentials.username.toLowerCase()) === true
            ? (logInUnValid = true)
            : cogoToast.warn("Sorry, that username is invalid!", {
                position: "bottom-right"
            });
        return (logInPwValid === true && logInUnValid === true) ? true : false;
    };

    //handleLoginSubmit
    //use axiosWithAuth --> all done inside handleLoginSubmit
    //successful post --> props.history.push('/Dashboard')
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const logInIsValid = logInValidation();
        if (logInIsValid) {
            setIsLoading(true);
            axiosWithAuth()
                .post('/auth/login', credentials)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.token)

                    //reset values back to empty strings
                    setCredentials({
                        username: '',
                        password: ''
                    });

                    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });

                    //automatically redirect from Login to --> Dashboard
                    props.history.push('/Dashboard')
                })
                .catch(error => {
                    console.log('Sorry, login credentials not valid.', error)
                    setIsLoading(false)
                })
        }
        //axiosWithAuth to login
    }

    return (
        <LoginWrapper>
            <LoginContainer>
                <h1>Hello, please login!</h1>
                <form onSubmit={handleLoginSubmit}>
                    <LoginTextInput
                        type='text'
                        name='username'
                        placeholder='Email (username)'
                        value={credentials.username}
                        onChange={handleInputChanges}
                    />
                    <LoginTextInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={credentials.password}
                        onChange={handleInputChanges}
                    />
                    <ButtonStyle type='submit'>
                        {/* Login */}
                        {isLoading ? 'Logging in...' : 'Log in'}
                    </ButtonStyle>
                </form>
            </LoginContainer>
            <LoginImageWrapper>
                <LoginImage src={'https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'} alt='gym weights workout bar tires' />
            </LoginImageWrapper>
        </LoginWrapper>
    );
}

export default Login;