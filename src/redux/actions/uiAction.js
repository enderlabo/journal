import { types } from "../../types/types"


export const setErr = ( err ) => ({
    type: types.uiSetErr,
    payload: err
});

export const removeErr = () => ({
    type: types.uiRemoveErr
});