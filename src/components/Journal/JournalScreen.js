import React from 'react'
import { Sidebar } from '../UI/Sidebar'
import { NotesScreen } from '../notes/NotesScreen'
import { NothingSelected } from './NothingSelected'
import { useSelector } from 'react-redux';


export const JournalScreen = () => {

    const { active } = useSelector( state => state.notes );

    return (
        <div className="journal__main-context">
            <Sidebar />


            <main>

                {
                    ( active )
                    ? ( <NotesScreen /> )
                    : ( <NothingSelected /> ) 
                     
                }

            </main>
        </div>
    )
}