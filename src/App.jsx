import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState(
    localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : []
  );

  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setFilteredNotes(notes)
  }, [notes]);

  const filtered = status => {
    if (status === 'all') {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes([...notes].filter(item => item.status === status));
    }
  };

  const setStatus = id => {
    setNotes(
      notes.map(item =>
        item.id === id ? { ...item, status: 'completed' } : item
      )
    );
  };

  const editNote = (id, body, importance) => {
    setNotes(
      notes.map(item =>
        item.id === id
          ? {
              ...item,
              body,
              importance,
            }
          : item
      )
    );
  };

  const createNote = data => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        body: data.body,
        status: 'active',
        importance: data.importance,
      },
    ]);
  };

  const removeNote = id => {
    setNotes([...notes.filter(item => item.id !== id)]);
  };

  return (
    <>
      <Header filtered={filtered} addNote={createNote} counter={notes.length} />
      <NotesList
        editNote={editNote}
        setStatus={setStatus}
        notes={filteredNotes}
        removeNote={removeNote}
      />
    </>
  );
}

export default App;
