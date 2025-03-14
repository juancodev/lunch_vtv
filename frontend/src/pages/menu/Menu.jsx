import { useRef, useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  Text,
  Container,
  Button,
  useDisclosure,
  Textarea,
  List,
  ListItem
} from '@chakra-ui/react';
import { MdAddCircle } from "react-icons/md";
import { ModalComponent } from '../../components/modal/Modal'
import { useDepartments } from '../../store/departments';
import { BreadcrumbComponent } from '@components/breadcrumb/Breadcrumb';
import { MenuComponent } from '@components/menu/Menu'
import { useUserAuth } from '@/store/auth';

export const Menu = () => {
  const { user } = useUserAuth();
  const departmentModal = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const [notes, setNotes] = useState('');
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notesList')) || [];
    setNotesList(savedNotes);
  }, []);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleAddNote = () => {
    const updatedNotesList = [...notesList, notes];
    setNotesList(updatedNotesList);
    localStorage.setItem('notesList', JSON.stringify(updatedNotesList));
    setNotes('');
  };

  return (
    <>
      <Container maxW='container.lg'>
        <BreadcrumbComponent route={'Menú'}/>
        <Card>
          <CardHeader className='bg-red-500'>
            <Text
              className='text-2xl font-bold text-white py-1 '
              textAlign='center'
            >
              Menú
            </Text>
          </CardHeader>
          <CardBody>
            { user?.role === 'admin' || user?.role === 'manager' ? (
              <>
                <Textarea
                  value={notes}
                  onChange={handleNotesChange}
                  placeholder='Escribe tus notas aquí...'
                  size='sm'
                  mt={4}
                />
                <Button onClick={handleAddNote} mt={2} colorScheme='blue'>
                  Agregar Nota
                </Button>
                <List spacing={3} mt={4}>
                  {notesList.map((note, index) => (
                    <ListItem key={index}>{note}</ListItem>
                  ))}
                </List>
              </>
            ) : (
              <>
                <Textarea
                  value={notes}
                  isReadOnly
                  placeholder='No tienes permiso para editar estas notas.'
                  size='sm'
                  mt={4}
                />
                <List spacing={3} mt={4}>
                  {notesList.map((note, index) => (
                    <ListItem key={index}>{note}</ListItem>
                  ))}
                </List>
              </>
            )}
          </CardBody>
        </Card>
      </Container>
      <ModalComponent
        section={'department'}
        isOpen={departmentModal.isOpen}
        onOpen={departmentModal.onOpen}
        onClose={departmentModal.onClose}
        initialRef={initialRef}
        finalRef={finalRef}
        title={'Crear Departamento'}
      />
    </>
  );
};