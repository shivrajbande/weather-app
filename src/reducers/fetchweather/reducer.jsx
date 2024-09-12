    import { ACTIONS } from "./action";
    const fetchingState = {
    loading: false,
    error: null,
    user: null,
    };

    export function currentWeatherReducer(state = fetchingState, action) {
    switch (action.type) {
        case ACTIONS.DATA_REQUEST:
        return { ...state, loading: true, error: null };
        case ACTIONS.DATA_ERROR:
        return { ...state, loading: false, error: action.payload };
        case ACTIONS.DATA_SUCCESS:
        return { ...state, loading: false, user: action.payload,error:null };
        default :
        return {...state};
    }
    }
