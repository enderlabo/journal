import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
            style={{ backgroundSize: 'cover',
            backgroundImage: 'url(https://miracomosehace.com/wp-content/uploads/mch/id_431.jpg)' }}>

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title"> A Good Day</p>
                <p className="journal__entry-content"> A Beautiful Day for watch Game of Throne </p>

            </div>

            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>10</h4>
                 
            </div>
        </div>
    )
}
