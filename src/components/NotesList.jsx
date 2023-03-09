import { Container, Box } from '@chakra-ui/react';
import React from 'react';
import Note from './Note';

const NotesList = ({ notes, removeNote, editNote, setStatus }) => {
  return (
    <Box w={'100%'}>
      <Container maxW={'container.lg'}>
        {notes.map(item => (
          <Note removeNote={removeNote} edit={editNote} setStatus={setStatus} key={item.id} note={item} />
        ))}
      </Container>
    </Box>
  );
};

export default NotesList;
