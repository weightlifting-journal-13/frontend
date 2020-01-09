import React, { createContext, useReducer } from "react";

//Both of these imports are necessary to use global state in a component.
//I know, we already import from react, but this should stay here for reference.
// import { useContext } from 'react';
// import { store } from "../reducers/WorkoutReducer";

//To actually USE your values and magical dispatcher, you'd want to do: 
// const globalState = useContext(store).state;
// const {dispatch} = useContext(store);

export const initialState = [
    {
        workout_name: "",
        workout_description: "",
        records: [
            {
                exercise_id: 24,
                rest_time: "string like 0 min",
                sets: 4,
                reps: 4,
                weight: 100,
                suggested_order: 1
            },
        ]
    }
]

const store = createContext(initialState);

const { Provider } = store;

const WorkoutProvider = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
        console.log("STATE AND ACTION: ", state, action);
        switch (action.type) {
            case "REQUEST":
                return ({
                    ...state,
                    busy: true,
                });

            case "REQUEST_FAILED":
                return ({
                    ...state,
                    busy: false,
                    error: action.payload,
                });

            case "EDIT_EXERCISE_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });

            case "ADD_EXERCISE_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "DELETE_EXERCISE_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "ADD_WORKOUT_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "EDIT_WORKOUT_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "DELETE_WORKOUT_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "SELECT_WORKOUT_SUCCESS":
                return ({
                    ...state,
                    busy: false,
                    error: ''
                });
            case "LOGIN_SUCCESS":
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user_id', action.payload.user_id);
                // console.log("GLOBAL STATE AFTER LOGIN IS: ", {
                //     ...state,
                //     // Storing our login token in state is PROBABLY NOT THE BEST IDEA, but localStorage is a rabbit hole for right now...
                //     user_id: action.payload,
                //     busy: false,
                //     error: ''
                // });
                return ({
                    ...state,
                    // Storing our login token in state is PROBABLY NOT THE BEST IDEA, but localStorage is a rabbit hole for right now...
                    user_id: action.payload,
                    busy: false,
                    error: ''
                });
            default:
                return state;
        };
    }, initialState);

    return (<Provider value={{ state, dispatch }}>{children}</Provider>);
}

export { store, WorkoutProvider }