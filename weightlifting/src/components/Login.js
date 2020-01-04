import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {
    // make post request to receive token from api
    //handle the token, navigate to 'Dashboard' component page

    //setup useState to store inital state/data
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)

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

    //handleLoginSubmit
    //use axiosWithAuth --> all done inside handleLoginSubmit
    //successful post --> props.history.push('/Dashboard')
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        //axiosWithAuth to login
        axiosWithAuth()
            .post('/auth/login', credentials)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token)

                //reset values back to empty strings
                setCredentials({
                    username: '',
                    password: ''
                })

                setIsLoading(false);

                //automatically redirect from Login to --> Dashboard
                props.history.push('/Dashboard')
            })
            .catch(error => {
                console.log('Sorry, login credentials not valid.', error)
            })
    }

    return (
        <div>
            <h1>Please login</h1>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Email (username)'
                    value={credentials.username}
                    onChange={handleInputChanges}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleInputChanges}
                />
                <button type='submit'>
                    {/* Login */}
                    {isLoading ? 'Logging in...' : 'Log in'}
                </button>
            </form>
        </div>
    );
}

export default Login;