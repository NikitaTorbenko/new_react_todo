import {
  Box,
  Container,
  IconButton,
  useDisclosure,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import ModalWindow from './UI/ModalWindow';

const Note = ({ note, setStatus, edit, removeNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editNote = data => {
    edit(note.id, data.body, data.importance);
    onClose();
  };

  return (
    <Box my={3} w={'100%'}>
      <Container
        display={'flex'}
        justifyContent={'space-between'}
        maxW={'container.lg'}
      >
        <Flex justifyContent={'space-between'} w={'65%'}>
          <Flex alignItems={'center'} w={'85%'} isTruncated>
            <Image
              mt={1}
              mx={'2'}
              w={'6px'}
              src="./assets/img/Point.svg"
              alt=""
            />
            <Text
              textDecoration={note.status === 'active' ? '' : 'line-through'}
              isTruncated
            >
              {note.body}
            </Text>
          </Flex>
          <Flex alignItems={'center'}>
            <Image
              mx={'1'}
              w={'15px'}
              src={
                note.importance === 'minor'
                  ? './assets/img/Minor.svg'
                  : note.importance === 'normal'
                  ? './assets/img/Normal.svg'
                  : './assets/img/Critical.svg'
              }
              alt=""
            />
            <Text
              textDecoration={note.status === 'active' ? '' : 'line-through'}
            >
              {note.importance}
            </Text>
          </Flex>
        </Flex>

        <Flex>
          {note.status === 'active' && (
            <>
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                onClick={() => setStatus(note.id)}
                icon={<CheckIcon />}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                onClick={() => onOpen()}
                icon={<EditIcon />}
                mx={3}
              />
            </>
          )}

          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            onClick={() => removeNote(note.id)}
            icon={<DeleteIcon />}
          />
        </Flex>
      </Container>
      <ModalWindow
        func={editNote}
        isOpen={isOpen}
        onClose={onClose}
        note={note}
      />
    </Box>
  );
};

export default Note;
