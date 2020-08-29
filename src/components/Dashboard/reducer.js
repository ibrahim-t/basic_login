
const initialState = {};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_INITIAL_DATA":
            return {
                ...state,
                records: action.records
            }
        default:
            return state;
    }

}