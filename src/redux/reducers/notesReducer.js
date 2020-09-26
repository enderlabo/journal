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
        case types.notesAddNew:
            return {
                ...state,
                notes: [ 
                    action.payload, 
                    ...state 
                ]

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
        //Deleted entries sidebar
        case types.notesDeleted:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }
        //Clean notes on Store
        case types.notesLogoutClean:
            return {
                ...state,
                active: null,
                notes: []
            }
            
        default:
            return state;
    }
}

