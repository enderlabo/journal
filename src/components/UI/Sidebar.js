import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../redux/actions/authAction';
import { startNewNote } from '../../redux/actions/notesAction';
import { JournalEntries } from '../Journal/JournalEntries'
import { Loading } from '../Loading/Loading';

export const Sidebar = () => {

    const dispatch= useDispatch();
    const [ checking, setChecking ] = useState(false);
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        
        setChecking(true)
        dispatch( startLogout() )

    }

    const handleEntry = () => {
        dispatch( startNewNote() );
    }

    if( checking ) {
        return(

            <Loading />
        )
    }

    return (
       
        <aside className="journal__sidebar">
            <div className="journal__siderbar-navbar">
                <h3 className="mt-5">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                    <span> { name }</span>
                </h3>

                <button className="btnS"
                onClick={ handleLogout }
                >
                    Logout
                </button>

            </div>

            <div className="journal__new-entry"
                onClick={ handleEntry }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
