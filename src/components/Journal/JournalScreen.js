import React from 'react'
import { Sidebar } from '../UI/Sidebar'
import { NotesScreen } from '../notes/NotesScreen'
// import { NothingSelected } from './NothingSelected'


export const JournalScreen = () => {
    return (
        <div className="journal__main-context">
            <Sidebar />


            <main>

                {/* <NothingSelected /> */}
                <NotesScreen />
            </main>
        </div>
    )
}