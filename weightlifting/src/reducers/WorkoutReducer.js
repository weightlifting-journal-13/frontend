// export const initialState = [

// ]

export const workoutReducer = (state = initialState, action) => {
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
            return ("NYI!");

        case "DELETE_EXERCISE_SUCCESS":
            return ("NYI!");

        case "ADD_WORKOUT_SUCCESS":
            return ("NYI!");

        case "EDIT_WORKOUT_SUCCESS":
            return ("NYI!");

        case "DELETE_WORKOUT_SUCCESS":
            return ("NYI!");

        case "SELECT_WORKOUT_SUCCESS":
            return ("NYI!");

        default:
            return state;
    }
}