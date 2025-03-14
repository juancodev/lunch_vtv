import { useRef, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
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
  useDisclosure
} from '@chakra-ui/react';
import { MdAddCircle } from "react-icons/md";
import { ModalComponent } from '../../components/modal/Modal'
import { useDepartments } from '../../store/departments';
import { BreadcrumbComponent } from '../../components/breadcrumb/Breadcrumb';
import { MenuComponent } from '../../components/menu/Menu'
import { useUserAuth } from '../../store/auth';

export const Department = () => {

  const { user } = useUserAuth();
  const { departmentsAll, department, getAxiosAllDepartment, deleteDepartment } = useDepartments();
  const departmentModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  useEffect(() => {
    getAxiosAllDepartment()
  }, [getAxiosAllDepartment, department, deleteDepartment]);

  return (
    <>
      <Container maxW='container.lg'>
        <BreadcrumbComponent route={'Departamentos'}/>
        <Card>
          <CardHeader className='bg-red-500'>
            <Text
              className='text-2xl font-bold text-white py-1 '
              textAlign='center'
            >
              Lista de Departamentos</Text>
          </CardHeader>
          <CardBody>
          { user?.role === 'admin' ? (
            <TableContainer>
            <Table variant='simple'>
              <TableCaption placement='top' className='absolute top-0 right-0'>
                <Button
                  size='sm'
                  colorScheme='whiteAlpha'
                  onClick={departmentModal.onOpen}
                >
                  <MdAddCircle
                    className='mr-1'
                  />
                  Crear Departamento
                </Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Departamentos</Th>
                  <Th>Cantidad de usuarios</Th>
                  <Th>Opciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {departmentsAll.length === 0 ? (
                  <Tr>
                    <Th className='w-full text-center'>No hay registro...</Th>
                  </Tr>
                ): (
                  departmentsAll.map((department) => (
                    <>
                      <Tr key={department._id}>
                        <Td>{department.name}</Td>
                        <Td>{department?.userCount}</Td>
                        <Td>
                          <MenuComponent 
                            type={'department'}
                            idDepartment={department._id}
                          />
                        </Td>
                      </Tr>
                    </>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
          ) : (
            <TableContainer>
              <Table variant='simple'>
                <TableCaption placement='top' className='absolute top-0 right-0'>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Departamentos</Th>
                    <Th>Cantidad de usuarios</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {departmentsAll.length === 0 ? (
                    <Tr>
                      <Th className='w-full text-center'>No hay registro...</Th>
                    </Tr>
                  ): (
                    departmentsAll.map((department) => (
                      <>
                        <Tr key={department._id}>
                          <Td>{department.name}</Td>
                          <Td>{department?.userCount}</Td>
                        </Tr>
                      </>
                    ))
                  )}
                </Tbody>
              </Table>
            </TableContainer>
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
  )
}
