import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../../types/types";


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

       const doc = await db.collection(`${ uid }/journal/notes`).add( newNote )
        //Take id and new note.
       dispatch( activeNotes( doc.id, newNote ) );
    }
}   

export const activeNotes = ( id, note ) => ({

    type: types.notesActive, 
    payload: {
        id,
        ...note
    }
})


export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )

        console.log(notes)
    }
}


export const setNotes = ( notes ) => ({

    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = ( notes ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !notes.url ){

            delete notes.url;
        }

        const noteToFirestore = { ...notes };
        delete noteToFirestore.id
        //Save on firestore.
        await db.doc(`${ uid }/journal/notes/${ notes.id }`).update( noteToFirestore );

        dispatch( refreshNote( notes.id, noteToFirestore ) );
        Swal.fire('Saved', notes.title, 'success');
    }
}

export const refreshNote = ( id, notes ) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        notes: {
            id,
            ...notes
        }
    }
})

export const startUploading = ( file ) => {

    return async ( dispatch, getState ) => {

        const { active: activeNotes } = getState().notes;

        //Modal of error or success
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        })

        //Updated url on Activenotes inside Store.
        const fileUrl = await fileUpload( file );
        activeNotes.url = fileUrl;

        dispatch( startSaveNote( activeNotes ) )

        Swal.close();

    }
}