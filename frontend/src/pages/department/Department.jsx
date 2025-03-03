import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { useRef } from 'react';
import { ModalComponent } from '../../components/modal/Modal'

export const Department = () => {

  const departmentModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  return (
    <>
      <Container maxW='container.lg'>
        <Breadcrumb className='mt-8 mb-10'>
          <BreadcrumbItem>
            <BreadcrumbLink>
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              Departamentos
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <CardHeader className='bg-red-500'>
            <Text
              className='text-2xl font-bold text-white py-1 '
              textAlign='center'
            >
              Lista de Departamentos</Text>
          </CardHeader>
          <CardBody>
            <TableContainer>
              <Table variant='simple'>
                <TableCaption placement='top' className='absolute top-0 right-0'>
                  <Button
                    size='sm'
                    colorScheme='whiteAlpha'
                    onClick={departmentModal.onOpen}
                  >
                    Crear Departamento +
                  </Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Departamentos</Th>
                    <Th>Cantidad de usuarios</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>0.91444</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
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
