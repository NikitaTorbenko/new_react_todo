import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Container,
  DrawerCloseButton,
  Button,
  Heading,
} from '@chakra-ui/react';

const MyDrawer = ({filtered}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pink" onClick={onOpen}>
        Notes
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Notes</DrawerHeader>
          <DrawerBody>
            <Container p={'0'} py={'3'} borderBottom={'1px solid #f2f2f2'} >
              <Heading py={'3'} size={'md'}>All notes</Heading>
              <Button onClick={() => filtered('all')}>Open</Button>
            </Container>
            <Container p={'0'} py={'3'} borderBottom={'1px solid #f2f2f2'} >
              <Heading py={'3'} size={'md'}>Completed notes</Heading>
              <Button onClick={() => filtered('completed')}>Open</Button>
            </Container>
            <Container p={'0'} py={'3'}  >
              <Heading py={'3'} size={'md'}>Active notes</Heading>
              <Button onClick={() => filtered('active')}>Open</Button>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
