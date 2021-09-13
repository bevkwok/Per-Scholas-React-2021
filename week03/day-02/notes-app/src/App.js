import './App.css';
import Title from './Title'
import Note from './Note'


function App() {
  const secondMessage = "This is the message for my second note"
  const titleForSecondNote = "This is a title passing in like a prop"

  // building this to loop it
  const notesData = [
    {
      title: "Mock Note Title 1",
      message: "Mock message 1"
    },    
    {
      title: "Mock Note Title 2",
      message: "Mock message 2"
    },
    {
      title: "Mock Note Title 3",
      message: "Mock message 3"
    },
  ]

  const notesElements = []
  for(let i = 0; i < notesData.length; i++) {
    const note = notesData[i];
    notesElements.push(
      <Note title={note.title} message={note.message} />
    )
  }

  return (
    <div className="App">
      <Title title="Notes title" subHeading="This is subHeading"/>
      <header className="App-header">
        <div>
          <h2>First note</h2>
          <p>Today we are learning React!</p>
          <h2>Second note</h2>
          <p>It is awesome.</p>
        </div>
      </header>
      <Note message="passing in something" title="just passing a string for now"/>
      <Note message={secondMessage} title={titleForSecondNote}/>
      
      {
        notesData.map((note, index) => {
          return (
            <Note title={note.title} message={note.message} />
          )
        })
      }


    </div>
  );
}

export default App;
