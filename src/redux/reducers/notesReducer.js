import { types } from "../../types/types";



const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.notesActive: 
        return {
            ...state,
            active: {
                ...action.payload
            }

        }
        //save array on Store
        case types.notesLoad:
            console.log(action.payload)
            return {
                ...state,
                notes: [ ...action.payload ]  
            }
        //updated entries sidebar    
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map( 
                    note => note.id === action.payload.id
                        ? action.payload.notes
                        : note
                )
            }
            
        default:
            return state;
    }
}

