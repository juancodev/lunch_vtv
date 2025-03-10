import {useEffect, useState} from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Card,
  CardHeader,
  CardBody,
  Text,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useUsers } from '../../store/users';
import { MenuComponent } from '../../components/menu/Menu';
import { FormComponent } from '../../components/form/Form';
import { BreadcrumbComponent } from '../../components/breadcrumb/Breadcrumb';

export const Users = () => {
  const { users, user, getAllUsers} = useUsers();


  useEffect(() => {
    getAllUsers()
  }, [getAllUsers, user])

  return (
    <>
      <Container maxW='container.lg'>
        <BreadcrumbComponent route={'Administrar Usuarios'}/>
        <Card>
          <CardHeader className='bg-red-500'>
            <Text
              className='text-2xl font-bold text-white py-1 '
              textAlign='center'
            >
              Administrar Usuarios</Text>
          </CardHeader>
          <CardBody>
            <Tabs isFitted variant='enclosed'>
              <TabList mb='1em'>
                <Tab>Lista de Usuarios</Tab>
                <Tab>Crear Usuario</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TableContainer>
                    <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>Nombre</Th>
                          <Th>Correo</Th>
                          <Th>Departamento</Th>
                          <Th>Estatus</Th>
                          <Th>Opciones</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {users?.length === 0 ? (
                          <Tr>
                            <Th className='w-full text-center'>No hay usuarios registrados...</Th>
                          </Tr>
                        ): (
                          users?.map((items) => (
                            <>
                              <Tr key={items?._id}>
                                <Td>{items.fullName}</Td>
                                <Td>{items.email}</Td>
                                <Td>{
                                  items?.department ?
                                  items.department.name :
                                  'Sin departamento'
                                }</Td>
                                <Td>{items.status ? 'Activo' : 'Inactivo'}</Td>
                                <Td>
                                  <MenuComponent/>
                                </Td>
                              </Tr>
                            </>
                          ))
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                  <FormComponent
                    titleForm={'Registrar Nuevo Usuario'}
                    descriptionForm={'Complete los campos para registrar un nuevo usuario'}
                    buttonTextForm={'Registrar Usuario'}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}
