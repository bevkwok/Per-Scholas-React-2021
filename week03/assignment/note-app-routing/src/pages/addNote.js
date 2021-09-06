import React, { useRef } from 'react'
export default function AddNote({setNotes}) {

    const noteTitleRef = useRef();
    const noteContentRef = useRef();

    
    // const [notes, setNotes] = useState([]);

    function handleAddNote(e) {
        const title = noteTitleRef.current.value
        const content = noteContentRef.current.value

        if (title === '' || content === '') return 
        setNotes(notes => {
            return [...notes, { title: title, content: content }]
        })
        noteTitleRef.current.value = null
        noteContentRef.current.value = null

    }
    return (
        <div>
            <h1>This is the Add Note Page</h1>
            <input ref={noteTitleRef} type="text" placeholder="Title"/>
            <input ref={noteContentRef} type="text" placeholder="Content"/>

            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}
