// export const initialState = [

// ]

export const userReducer = (state = initialState, action) => {
    console.log("STATE AND ACTION: ", state, action);
    switch (action.type) {
        case "REQUEST":
            return ({
                ...state,
                busy: true,
            });

        case "EDIT_EXERCISE_SUCCESS":
            return ("NYI!");

        case "EDIT_EXERCISE_FAILED":
            return ("NYI!");

        case "ADD_EXERCISE_SUCCESS":
            return ("NYI!");

        case "ADD_EXERCISE_FAILED":
            return ("NYI!");

        case "DELETE_EXERCISE_SUCCESS":
            return ("NYI!");

        case "DELETE_EXERCISE_FAILED":
            return ("NYI!");

        case "ADD_WORKOUT_SUCCESS":
            return ("NYI!");

        case "ADD_WORKOUT_FAILED":
            return ("NYI!");

        case "EDIT_WORKOUT_SUCCESS":
            return ("NYI!");

        case "EDIT_POST_FAILED":
            return ("NYI!");

        case "DELETE_WORKOUT_SUCCESS":
            return ("NYI!");

        case "DELETE_POST_FAILED":
            return ("NYI!");

        default:
            return state;
    }
}