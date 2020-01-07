import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import cogoToast from "cogo-toast";
// import * as Yup from 'yup';

const Registration = props => {
  const [registrationCredentials, setRegistrationCredentials] = useState({
    username: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  //handleInputChanges
  const handleInputChanges = e => {
    setRegistrationCredentials({
      ...registrationCredentials,
      [e.target.name]: e.target.value
    });
    console.log(registrationCredentials);
  };

  const regValidation = () => {
    let pwValid = false;
    let unValid = false;
    registrationCredentials.password.length >= "5"
      ? (pwValid = true)
      : cogoToast.warn("Sorry, that password is a little short!", {
          position: "bottom-right"
        });
    //check for valid email
    const emailRegEx = /\S+@\S+\.\S+/;
    emailRegEx.test(registrationCredentials.username.toLowerCase()) === true
      ? (unValid = true)
      : cogoToast.warn("Sorry, that username is invalid!", {
          position: "bottom-right"
        });
    return (pwValid === true && unValid === true) ? true : false;
  };

  const handleOnSubmitRegistration = e => {
    e.preventDefault();
    const isValid = regValidation();
    if (isValid) {
      setIsLoading(true);
      axiosWithAuth()
        .post("/auth/register", registrationCredentials)
        .then(response => {
          console.log(response);

          setRegistrationCredentials({
            username: "",
            password: ""
          });

          setIsLoading(false);

          props.history.push("/");
        })
        .catch(error => {
          console.log(
            "Sorry, registration not complete. Please try again.",
            error
          );
          setIsLoading(false);
        });
    }
  };

  // const axiosSubmit = () => {
  //   setIsLoading(true);
  //   axiosWithAuth()
  //     .post("/auth/register", registrationCredentials)
  //     .then(response => {
  //       console.log(response);

  //       setRegistrationCredentials({
  //         username: "",
  //         password: ""
  //       });

  //       setIsLoading(false);

  //       props.history.push("/");
  //     })
  //     .catch(error => {
  //       console.log(
  //         "Sorry, registration not complete. Please try again.",
  //         error
  //       );
  //       setIsLoading(false);
  //     });
  // };

  //validation schema
  //handleOnSubmitRegistration
  //moved axios with auth to axiosSubmit
  // moved setIsLoading(true) to axiosSubmit
  // auth submit back

  //after adding regex, console shows error response from back end. prior to regex cogo toast messages were appearing

  return (
    <div>
      <h1>Registration Component</h1>
      <h3>Please sign up</h3>
      <form onSubmit={handleOnSubmitRegistration}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={registrationCredentials.username}
          onChange={handleInputChanges}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registrationCredentials.password}
          onChange={handleInputChanges}
          required
        />
        <button type="submit">{isLoading ? "Signing in..." : "Sign up"}</button>
      </form>
    </div>
  );
};

export default Registration;
