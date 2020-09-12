import { types } from "../../types/types"


const initialState = {
    loading: false,
    msgErr: null
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.types ) {
        case types.uiSetErr:
            return {
                ...state,
                msgErr: action.payload
            }
            
        case types.uiRemoveErr:
            return {
                ...state,
                msgErr: null
            }
            
        default:
            return state;
    }
}