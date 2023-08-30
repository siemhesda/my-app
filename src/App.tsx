import { useState } from "react";
import InputCard from "./components/InputCard";
import NoteCard from "./components/NoteCard";
import { Button } from "./components/ui/button";

const dummyNotes = [
  { id: 1, note: 'This is an example note, create a new one' },

]

function App() {
  const [notes, setNotes] = useState(dummyNotes)
  const [createOpen, setCreateOpen] = useState(false)

  const handleNoteRemoval = (idToRemove: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== idToRemove));
  };

  return (
    <div className="flex flex-col items-center p-12">
      {!createOpen && <Button onClick={() => setCreateOpen(true)}>New Note</Button>}
      {createOpen && <InputCard onClose={() => {
        setCreateOpen(false)
      }} onCreate={vals => {
        console.log(vals)
        setNotes(prev => [{ note: vals.note, id: prev.length + 1 }, ...prev,])
      }} />}
      {notes.map(({ id, note }) => <NoteCard key={id} note={note} onRemove={() => handleNoteRemoval(id)} />)}
    </div>
  );
}

export default App;
