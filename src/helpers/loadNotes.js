const { db } = require("../firebase/firebase-config");


export const loadNotes = async ( uid ) => {
    
    const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    noteSnap.forEach( aux =>  {
        notes.push({
            id: aux.id,
            ...aux.data()
        })
    });

    console.log(notes);

    return noteSnap;

}