import {useState} from 'react';
import {
  Modal,
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
  useToast
} from '@chakra-ui/react';
import { useDepartments } from '../../store/departments';

export const ModalComponent = ({
    section,
    isOpen,
    onOpen,
    onClose,
    initialRef,
    finalRef,
    title
  }) => {
    const { postAxiosDepartment } = useDepartments();
    const [department, setDepartment] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmitData = (event) => {
      event.preventDefault();
      setLoading(true);

      try {
        const data = {
          name: department
        }
        postAxiosDepartment(data)
          .then(() => {
            toast({
              title: 'Departamento creado',
              position: 'top',
              isClosable: true,
              duration: 3000,
              status: 'success'
            })
            setLoading(false)
            onClose()
          })
      } catch(e) {
        toast({
          title: `Error al crear el departamento: ${e.message}`,
          description: 'Hubo un error al crear el departamento, contacta a tu administrador',
          position: 'top',
          isClosable: true,
          status: 'success'
        })
        setLoading(false)
      }

    }


    if (section === 'department') {
      return (
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Nombre del Departamento</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder='Recursos Humanos...'
                    onChange={(event) => setDepartment(event.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme='green'
                  mr={3}
                  onClick={handleSubmitData}
                  isLoading={loading}
                >
                  Guardar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
}
