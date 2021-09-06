import React from 'react'
import Note from './note';

export default function NotesList({notes}) {


    return (
        <div>
            <h1>This is the Note List Page</h1>
            <ul>
                {
                    notes.map(note => {
                        return (
                        <li>
                            <Note message={note.message}/>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
