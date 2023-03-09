import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';

function ModalWindow({ isOpen, func, onClose, note }) {
  const [data, setData] = useState({
    body: note.body,
    importance: note.importance,
  });

  const [isEmpty, setIsEmpty] = useState({
    body: false,
    importance: false,
  });

  useEffect(() => {
    setData({ body: note.body, importance: note.importance });
  }, [note]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your task</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Note Name</FormLabel>
            <Input
              value={data.body}
              onChange={e => setData({ ...data, body: e.target.value })}
              placeholder="Note Name"
            />
            {!!isEmpty.body && <Text color={'red'}>Note is empty</Text>}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Importanse</FormLabel>
            <Select
              defaultValue={'importance'}
              onChange={e => setData({ ...data, importance: e.target.value })}
            >
              <option disabled value={'importance'}>
                Importance...
              </option>
              <option value={'critical'}>Critical</option>
              <option value={'normal'}>Normal</option>
              <option value={'minor'}>Minor</option>
            </Select>
            {!!isEmpty.importance && (
              <Text color={'red'}>Importance is empty</Text>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              if (data.body === '' || data.importance === '') {
                setIsEmpty({
                  body: !data.body,
                  importance: !data.importance,
                });
              } else {
                func(data);
                setIsEmpty({ body: false, importance: false });
              }
            }}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalWindow;
