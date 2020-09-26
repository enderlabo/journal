import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNotes, deletedNotes, startDeleted } from '../../redux/actions/notesAction';

export const NotesScreen = () => {

    const { active: notes } = useSelector( aux => aux.notes );
    const { uid } = useSelector( aux => aux.auth );
    const dispatch = useDispatch();

    const [ formValues, handleInputChange, reset ] = useForm( notes );
    const { body, title, id } = formValues;

    const activeId = useRef( notes.id );

    useEffect(() => {
        
        if( notes.id !== activeId.current ){
            reset( notes );

            activeId.current = notes.id;
        }
        
    }, [ notes, reset ])
    
    useEffect( () => {

        dispatch( activeNotes( formValues.id, { ...formValues } ) );

    }, [ formValues, dispatch ])


    const handleDeleted = () => {
        // console.log( id )
        dispatch( startDeleted( id ) )
    }

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                type="text"
                placeholder="Some Awesome Title" 
                className="notes__title-input"
                value = { title }
                onChange = { handleInputChange }
                name = "title"
                />

                <textarea
                placeholder="What happened today"
                className="notes__textarea"
                value = { body }
                onChange= { handleInputChange }
                name = "body"
                >

                </textarea>

                {
                    notes.url &&
                    <div className="notes__image">
                        <img 
                            src={ notes.url }
                            alt="Wallpaper"
                        />
                    </div>
                }                 
            </div>

                <button className="btn-danger"
                onClick={ handleDeleted }
                > Delete </button>

         
        </div>
    )
}
