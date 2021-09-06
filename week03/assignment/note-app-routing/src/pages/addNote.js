import React, { useRef } from 'react'
export default function AddNote({setNotes}) {

    const noteMessageRef = useRef();
    
    // const [notes, setNotes] = useState([]);

    function handleAddNote(e) {
        const message = noteMessageRef.current.value
        if (message === '') return 
        setNotes(notes => {
            return [...notes, { message: message }]
        })
        noteMessageRef.current.value = null
    }
    return (
        <div>
            <h1>This is the Add Note Page</h1>
            <input ref={noteMessageRef} type="text" />
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}
