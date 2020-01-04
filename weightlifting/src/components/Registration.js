import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Registration = (props) => {

    const [registrationCredentials, setRegistrationCredentials] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    //handleInputChanges
    const handleInputChanges = (e) => {
        setRegistrationCredentials({
            ...registrationCredentials,
            [e.target.name]: e.target.value
        })
        console.log(registrationCredentials)
    }

    //handleOnSubmitRegistration
    const handleOnSubmitRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true)

        axiosWithAuth()
            .post('/auth/register', registrationCredentials)
            .then(response => {
                console.log(response)
                // setRegistrationCredentials(response)

                setRegistrationCredentials({
                    email: '',
                    password: ''
                })
                
                setIsLoading(false)

                props.history.push('/Login')
            })
            .catch(error => {
                console.log('Sorry, registration not complete. Please try again.', error)
                setIsLoading(false)
            })

    }

    return ( 
        <div>
            <h1>Registration Component</h1>
            <h3>Please sign up</h3>
            <form onSubmit={handleOnSubmitRegistration} >
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={registrationCredentials.email}
                    onChange={handleInputChanges}
                    required
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={registrationCredentials.password}
                    onChange={handleInputChanges}
                    required
                />
                <button type='submit'>
                    {isLoading ? 'Signing in...' : 'Sign up'}
                </button>
            </form>
        </div>
     );
}
 
export default Registration;