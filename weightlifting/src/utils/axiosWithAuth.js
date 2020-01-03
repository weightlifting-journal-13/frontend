import axios from 'axios';

export const axiosWithAuth = () => {

    //gets a token from localStorage
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://weight-lifting-app.herokuapp.com/api',
        headers: {
            authorization: token
        } 
    })
}