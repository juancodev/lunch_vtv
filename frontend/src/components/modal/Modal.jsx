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
  Select,
  Button,
  useToast
} from '@chakra-ui/react';
import { useDepartments } from '../../store/departments';
import { useSchedule } from '../../store/schedule';

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
    const { postAxiosSchedule } = useSchedule();
    const [department, setDepartment] = useState('');
    const [scheduleData, setScheduleData] = useState({
      schedule: 'matutino',
      day: 'lunes',
      time: '7:00',
      alias: 'am'
    });
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    if (section === 'department') {

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
        } catch (e) {
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
    } else if (section === 'schedule') {

      const handleSubmitDataSchedule = (event) => {
        try {
          event.preventDefault();
          setLoading(true);

          postAxiosSchedule(scheduleData)
            .then(() => {
              toast({
                title: 'Horario creado',
                position: 'top',
                isClosable: true,
                duration: 3000,
                status: 'success'
              })
              setLoading(false)
              onClose()
            })
        } catch (error) {
          toast({
            title: `Error al crear el horario: ${error.message}`,
            description: 'Hubo un error al crear el horario, contacta a tu administrador',
            position: 'top',
            isClosable: true,
            status: 'error'
          })
          setLoading(false)
        }
      }

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
                <FormControl className='mb-4'>
                  <FormLabel>Elige un Horario</FormLabel>
                  <Select
                    placeholder='Selecciona un tipo de horario...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      schedule: event.target.value
                    })}
                  >
                    <option value={'matutino'}>Matutino</option>
                    <option value={'vespertino'}>Vespertino</option>
                  </Select>
                </FormControl>

                <FormControl className='mb-4'>
                  <FormLabel>Elige un Día</FormLabel>
                  <Select
                    placeholder='Selecciona un día de la semana...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      day: event.target.value
                    })}
                  >
                    <option value={'lunes'}>Lunes</option>
                    <option value={'martes'}>Martes</option>
                    <option value={'miercoles'}>Miércoles</option>
                    <option value={'jueves'}>Jueves</option>
                    <option value={'viernes'}>Viernes</option>
                    <option value={'sabado'}>Sábado</option>
                    <option value={'domingo'}>Domingo</option>
                  </Select>
                </FormControl>

                <FormControl className='mb-4'>
                  <FormLabel>Elige una Hora de Inicio</FormLabel>
                  <Select
                    placeholder='Selecciona una hora...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      time: event.target.value
                    })}
                  >
                    <option value={'07:00'}>7:00</option>
                    <option value={'08:00'}>8:00</option>
                    <option value={'09:00'}>9:00</option>
                    <option value={'10:00'}>10:00</option>
                    <option value={'11:00'}>11:00</option>
                    <option value={'12:00'}>12:00</option>
                  </Select>
                </FormControl>

                <FormControl className='mb-4'>
                  <FormLabel>Elige una Alias</FormLabel>
                  <Select
                    placeholder='Selecciona una hora...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      alias: event.target.value
                    })}
                  >
                    <option value={'am'}>AM</option>
                    <option value={'pm'}>PM</option>
                  </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme='green'
                  mr={3}
                  onClick={handleSubmitDataSchedule}
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
