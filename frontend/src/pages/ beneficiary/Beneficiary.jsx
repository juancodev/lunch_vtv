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
import { BreadcrumbComponent } from '../../components/breadcrumb/Breadcrumb';
import { MdAddCircle } from "react-icons/md";
import { ModalComponent } from '../../components/modal/Modal'

export const Beneficiary = () => {

  const beneficiaryModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  return (
    <>
      <Container maxW='container.lg'>
        <BreadcrumbComponent route={'Beneficiarios'}/>
        <Card>
          <CardHeader className='bg-red-500'>
            <Text
              className='text-2xl font-bold text-white py-1 '
              textAlign='center'
            >
              Lista de Beneficiarios</Text>
          </CardHeader>
          <CardBody>
            <TableContainer>
              <Table variant='simple'>
                <TableCaption placement='top' className='absolute top-0 right-0'>
                  <Button
                    size='sm'
                    colorScheme='whiteAlpha'
                    onClick={beneficiaryModal.onOpen}
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
                  </Tr>
                </Thead>
                <Tbody>
                  {/* {departmentsAll.length === 0 ? (
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
                  )} */}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </Container>
      <ModalComponent
        section={'beneficiary'}
        isOpen={beneficiaryModal.isOpen}
        onOpen={beneficiaryModal.onOpen}
        onClose={beneficiaryModal.onClose}
        initialRef={initialRef}
        finalRef={finalRef}
        title={'Agregar Beneficiario'}
      />
    </>
  )
}
