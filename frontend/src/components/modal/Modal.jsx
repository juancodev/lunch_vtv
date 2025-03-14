import {useState, useEffect} from 'react';
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
  InputGroup,
  InputRightElement,
  Select,
  Button,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  Box,
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'
import { useDepartments } from '../../store/departments';
import { useSchedule } from '../../store/schedule';
import { useBeneficiaryStore } from '../../store/beneficiary';

export const ModalComponent = ({
    section,
    isOpen,
    onOpen,
    onClose,
    initialRef,
    finalRef,
    title,
    userData
  }) => {
    const { postAxiosDepartment } = useDepartments();
    const { postAxiosSchedule, schedules, getAxiosAllSchedule } = useSchedule();
    const { postCreateBeneficiary } = useBeneficiaryStore();
    const [department, setDepartment] = useState('');
    const [scheduleData, setScheduleData] = useState({
      schedule: 'breakfast',
      day: 'always',
      time_start: '7:00',
      time_end: '12:00'
    });
    const [beneficiaryData, setBeneficiaryData] = useState({
      user: '',
      schedule: '',
      times: '',
      has: false
    });
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    useEffect(() => {
      getAxiosAllSchedule()
    }, [getAxiosAllSchedule])

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
                    <option value={'Desayuno'}>Desayuno</option>
                    <option value={'Almuerzo'}>Almuerzo</option>
                    <option value={'Cena'}>Cena</option>
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
                    <option value={'Todos los dias'}>Todos los días</option>
                    <option value={'Semanal'}>Lunes a Viernes</option>
                    <option value={'Fines de semana'}>Fines de semana</option>
                  </Select>
                </FormControl>

                <FormControl className='mb-4'>
                  <FormLabel>Elige una Hora de Inicio</FormLabel>
                  <Select
                    placeholder='Selecciona una hora...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      time_start: event.target.value
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
                  <FormLabel>Elige una Hora de Fin</FormLabel>
                  <Select
                    placeholder='Selecciona una hora...'
                    onChange={(event) => setScheduleData({
                      ...scheduleData,
                      time_end: event.target.value
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
    } else if (section === 'beneficiary') {

      const handleUserClick = (user) => {
        setSelectedUser(user);
        setBeneficiaryData({
          ...beneficiaryData,
          user: user._id,
        })
      };

      const handleSubmitDataBeneficiary = (event) => {
        try {
          event.preventDefault();
          setLoading(true);

          postCreateBeneficiary(beneficiaryData)
            .then(() => {
              toast({
                title: '¡Beneficiario agregado!',
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
            title: `Error al agregar al beneficiario: ${error.message}`,
            description: 'Hubo un error al agregar al beneficiario, contacta a tu administrador',
            position: 'top',
            isClosable: true,
            status: 'error'
          })
          setLoading(false)
        }
      }

      return (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={'6xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <TableContainer>
                <Table size={'sm'} variant='striped' colorScheme='red' className='mb-8'>
                  <TableCaption placement='top'>
                    <InputGroup className='mb-4'>
                      <Input placeholder='Buscar usuario...'/>
                      <InputRightElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                      </InputRightElement>
                    </InputGroup>
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Nombre</Th>
                      <Th>Correo</Th>
                      <Th>Rol</Th>
                    </Tr>
                  </Thead>
                  <Tbody className='cursor-pointer'>
                    { userData.length > 0 ? (
                      userData.map((user) => (
                        <>
                          <Tr
                            key={user._id}
                            onClick={() => handleUserClick(user)}
                            className='hover:bg-gray-100'
                          >
                            <Td>{user.fullName}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.role ? user.role : 'Sin rol'}</Td>
                          </Tr>
                        </>
                      ))
                    ) : (
                      <>
                        <Th>No hay resultado</Th>
                      </>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>

              <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, minmax(0, 1fr))'}}
                templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                gap={6}
              >
                <Box>
                  <FormControl className='my-4' isReadOnly>
                    <FormLabel>Usuario</FormLabel>
                    <Input
                      value={selectedUser ? selectedUser.fullName : ''}
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl className='my-4' isReadOnly>
                    <FormLabel>Departamento</FormLabel>
                    <Input value={selectedUser ? selectedUser?.department?.name : ''} />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl className='my-4'>
                    <FormLabel>Dispone del Beneficio</FormLabel>
                    <Select onChange={(event) => setBeneficiaryData({
                      ...beneficiaryData,
                      has: event.target.value
                    })} placeholder='Selecciona una opción...'>
                      <option value={false}>No</option>
                      <option value={true}>Sí</option>
                    </Select>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl className='my-4' isReadOnly>
                    <FormLabel>Tipo de Horario</FormLabel>
                    <Select onChange={(event) => setBeneficiaryData({
                      ...beneficiaryData,
                      schedule: event.target.value
                    })} placeholder='Selecciona un tipo de horario...'>
                      {schedules.map((schedule) => (
                        <option key={schedule._id} value={schedule._id}>{schedule.schedule}</option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl className='my-4' isReadOnly>
                    <FormLabel>Tiempo</FormLabel>
                    <Select onChange={(event) => setBeneficiaryData({
                      ...beneficiaryData,
                      times: event.target.value
                    })} placeholder='Selecciona un tiempo...'>
                      <option value={'always'}>Todos los días</option>
                      <option value={'Week'}>Lunes a Viernes</option>
                      <option value={'Weekend'}>Fines de semana</option>
                    </Select>
                  </FormControl>
                </Box>

              </Grid>


            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme='green'
                mr={3}
                onClick={handleSubmitDataBeneficiary}
                isLoading={loading}
              >
                Guardar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )
    }
}
