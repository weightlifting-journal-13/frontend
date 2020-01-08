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
            {
                exercise_id: 31,
                rest_time: "string like 0 min",
                sets: 4,
                reps: 4,
                weight: 100,
                suggested_order: 2
            },
            {
                exercise_id: 46,
                rest_time: "string like 0 min",
                sets: 4,
                reps: 4,
                weight: 100,
                suggested_order: 3
            }
        ]
    }
]

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
        case "LOGIN_SUCCESS":
            return ({
                ...state,
                busy: false,
                error: ''
            });
        default:
            return state;
    }
}