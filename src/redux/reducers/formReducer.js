const initialState = {
    enteredPatientsData: [],
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'submit':
            return {
                ...state,
                enteredPatientsData: [...state.enteredPatientsData, action.payload]
            }
        case 'delete':
            return {
                ...state,
                enteredPatientsData: [...action.payload]
            }
        case 'edited':
            return {
                ...state,
                enteredPatientsData: action.payload
            }
        default:
            return state;
    }
}

export default formReducer;