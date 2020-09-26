import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../redux/actions/notesAction';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } =useSelector( state => state.notes );

    const handleSave = () => {
        //Send active notes on firestore
        dispatch( startSaveNote( active ) );
    }

    const handlePicture = (e) => {
        document.querySelector('#files').click();
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0];

        if( file ) { //upload image to cloudinary
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span> 10/09/2020 </span>

            <input type="file"
            id="files"
            name="file"
            style={{ display: 'none' }}
            onChange={ handleFileChange }
            />
            
            <div>
                    <button className="btn"
                    onClick={ handlePicture } >
                        Picture
                    </button>

                    <button className="btn" onClick= { handleSave }>
                        Save
                    </button>
            </div>
        </div>
    )
}
