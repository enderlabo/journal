import React from 'react'
import { useSelector } from 'react-redux'

export const JournalEntry = ({ id, body, title, date, url }) => {

   


    return (


        <div className="journal__entry pointer">
                {/* If url exist */}
            { 
                url &&
                    <div className="journal__entry-picture"
                    style={{ backgroundSize: 'cover',
                            backgroundImage: `url(${ url })` 
                    }}></div>

            }

            <div className="journal__entry-body">
                <p className="journal__entry-title"> { title }</p>
                <p className="journal__entry-content"> { body } </p>

            </div>

            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>10</h4>
                 
            </div>
        </div>
    )
}
