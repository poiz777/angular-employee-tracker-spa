const baseState     = {};
const FETCH_DATA    = 'FETCH_DATA';

export function employeeReducer(state = baseState, action ) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                article: action.payload
            };
        default:
            return state;
    }
}
