import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNotes } from '../../redux/actions/notesAction';

export const NotesScreen = () => {

    const { active: notes } = useSelector( aux => aux.notes );
    const dispatch = useDispatch();

    const [ formValues, handleInputChange, reset ] = useForm( notes );
    const { body, title } = formValues;

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
            
        </div>
    )
}
