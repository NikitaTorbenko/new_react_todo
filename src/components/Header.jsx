import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Button,
  Text,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './UI/ColorModeSwitcher';
import { AddIcon } from '@chakra-ui/icons';
import ModalWindow from './UI/ModalWindow';
import MyDrawer from './UI/MyDrawer';

const Header = ({ filtered, counter, addNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [note, setNote] = useState({ body: '', importance: '' });
  const [isEmpty, setIsEmpty] = useState({ body: false, importance: false });

  const addNewNote = data => {
    if (data.body === '') {
      setIsEmpty({ ...isEmpty, body: true });
    } else if (data.importance === '') {
      setIsEmpty({ ...isEmpty, importance: true });
    } else {
      addNote(data);
      setNote({ body: '', importance: '' });
      onClose();
    }
  };

  return (
    <Box as="header">
      <Container maxW={'container.lg'} py={2}>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          borderBottom={'1px solid #cbd5e0'}
          pb={'3'}
        >
          <MyDrawer filtered={filtered}>Notes</MyDrawer>
          <Heading size={{ base: 'sm', sm: 'sm', md: 'lg', lg: 'lg' }}>
            Your Todo List
          </Heading>
          <ColorModeSwitcher mt="3" />
        </Flex>
        <Flex
          //   maxW={'500px'}
          flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          m={{
            base: '10px auto 0',
            sm: '10px auto 0',
            md: '10px 0 0',
            lg: '10px 0 0',
          }}
        >
          <Heading size={'lg'} display={'flex'}>
            You've got
            <Text mx={3} color={'#d53f8c'}>
              {counter} task
            </Text>
            today
          </Heading>
          <Button
            onClick={onOpen}
            display={'flex'}
            justifyContent={'space-around'}
            colorScheme={'pink'}
            w={'140px'}
            size={'md'}
            mt="3"
          >
            <AddIcon />
            Add New
          </Button>
        </Flex>
      </Container>
      <ModalWindow
        func={addNewNote}
        isOpen={isOpen}
        onClose={onClose}
        note={note}
        isEmpty={isEmpty}
      />
    </Box>
  );
};

export default Header;
