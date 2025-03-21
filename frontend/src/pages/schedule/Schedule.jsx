import { useRef, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  Container,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { BreadcrumbComponent } from "../../components/breadcrumb/Breadcrumb";
import { ModalComponent } from "../../components/modal/Modal";
import { MdAddCircle } from "react-icons/md";
import { useSchedule } from '../../store/schedule';
import { useUserAuth } from '../../store/auth';
import { MenuComponent } from '../../components/menu/Menu';

export const Schedule = () => {
  const { schedules, schedule, getAxiosAllSchedule } = useSchedule();
  const { user } = useUserAuth();
  const scheduleModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  useEffect(() => {
    getAxiosAllSchedule();
  }, [getAxiosAllSchedule, schedule])

  return (
    <>
       <Container maxW='container.lg'>
          <BreadcrumbComponent route={'Horarios'}/>
          <Card>
            <CardHeader className='bg-red-500'>
              <Text
                className='text-2xl font-bold text-white py-1 '
                textAlign='center'
              >
                Horarios</Text>
            </CardHeader>
            <CardBody>
              {user?.role !== 'admin' && user?.role !== 'manager' ? (
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>Tipo de Horario</Th>
                      <Th>Día</Th>
                      <Th>Hora de Inicio</Th>
                      <Th>Hora de Fin</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {schedules.length > 0 ? (
                      schedules.map((schedule) => (
                        <Tr key={schedule?._id}>
                          <Td>{schedule?.schedule}</Td>
                          <Td>{schedule?.day}</Td>
                          <Td>{schedule?.time_start}</Td>
                          <Td>{schedule?.time_end}</Td>
                        </Tr>
                      ))
                    ) : (
                      <Th>No hay registro de fecha aún</Th>
                    )
                    }
                  </Tbody>
                </Table>
              </TableContainer>
              ) : (
                <TableContainer>
                  <Table variant = 'simple'>
                    <TableCaption placement = 'top' className = 'absolute top-0 right-0'>
                      <Button
                        size = 'sm'
                        colorScheme = 'whiteAlpha'
                        onClick = {scheduleModal.onOpen}
                      >
                        <MdAddCircle
                          className='mr-1'
                        />
                        Agregar Horario
                      </Button>
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Tipo de Horario</Th>
                        <Th>Día</Th>
                        <Th>Hora de Inicio</Th>
                        <Th>Hora de Fin</Th>
                        <Th>Opciones</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {schedules.length > 0 ? (
                        schedules.map((schedule) => (
                          <Tr key={schedule?._id}>
                            <Td>{schedule?.schedule}</Td>
                            <Td>{schedule?.day}</Td>
                            <Td>{schedule?.time_start}</Td>
                            <Td>{schedule?.time_end}</Td>
                            <Td>
                              <MenuComponent 
                                type={'schedule'}
                                idSchedule={schedule?._id}
                              />
                            </Td>
                          </Tr>
                        ))
                      ) : (
                        <Th>No hay registro de fecha aún</Th>
                      )
                      }
                    </Tbody>
                  </Table>
                </TableContainer >
              )}
            </CardBody>
          </Card>
        </Container>
        <ModalComponent
          section={'schedule'}
          isOpen={scheduleModal.isOpen}
          onOpen={scheduleModal.onOpen}
          onClose={scheduleModal.onClose}
          initialRef={initialRef}
          finalRef={finalRef}
          title={'Agregar Horario'}
        />
    </>
  )
}
