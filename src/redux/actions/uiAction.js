import { types } from "../../types/types"


export const setErr = ( error ) => ({
    type: types.uiSetError,
    payload: error
});

export const removeErr = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLoading,
   
    
});

export const finishLoading = () => ({
    type: types.uiFinishLoading,
    
});



