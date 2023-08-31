import { useState, useEffect } from "react";
import InputCard from "./components/InputCard";
import NoteCard from "./components/NoteCard";
import { Button } from "./components/ui/button";

export type Note = {
  id: number;
  note: string;
};

function App() {
  const [notes, setNotes] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    fetch("http://localhost:3001/api/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  };

  const handleNoteRemoval = (idToRemove: number) => {
    fetch(`http://localhost:3001/api/notes?id=${idToRemove}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => fetchNotes())
      .catch((error) => console.error("Error deleting note:", error));
  };

  const handleNoteCreation = (newNote: Note) => {
    fetch("http://localhost:3001/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then(() => {
        fetchNotes();
        setCreateOpen(false);
      })
      .catch((error) => console.error("Error creating note:", error));
  };

  return (
    <div className="flex flex-col items-center p-12">
      {!createOpen && (
        <Button onClick={() => setCreateOpen(true)}>New Note</Button>
      )}
      {createOpen && (
        <InputCard
          onClose={() => setCreateOpen(false)}
          onCreate={handleNoteCreation}
        />
      )}
      {notes.map((note: Note) => (
        <NoteCard
          key={note.id}
          note={note}
          onRemove={(id) => handleNoteRemoval(id)}
        />
      ))}
    </div>
  );
}

export default App;
