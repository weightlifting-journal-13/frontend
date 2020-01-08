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
        default:
            return state;
    }
}