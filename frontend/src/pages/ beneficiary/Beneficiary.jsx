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
import { BreadcrumbComponent } from '../../components/breadcrumb/Breadcrumb';
import { ModalComponent } from '../../components/modal/Modal'
import { useUsers } from '../../store/users';
import { useBeneficiaryStore } from '../../store/beneficiary';

export const Beneficiary = () => {

  const {
    beneficiaries,
    beneficiary,
    getAllBeneficiaries
  } = useBeneficiaryStore();
  const { users } = useUsers();
  const beneficiaryModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  useEffect(() => {
    getAllBeneficiaries();
  }, [getAllBeneficiaries, beneficiary]);

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
                    Agregar Beneficiario
                  </Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nombre</Th>
                    <Th>Correo</Th>
                    <Th>Departamento</Th>
                    <Th>Dispone</Th>
                    <Th>Opciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {beneficiaries.length > 0 ? (
                    beneficiaries.map((beneficiaryData) => (
                      <>
                        <Tr key={beneficiaryData?._id}>
                          <Td>{beneficiaryData?.user?.fullName}</Td>
                          <Td>{beneficiaryData?.user?.email}</Td>
                          <Td>{beneficiaryData?.user?.department ? beneficiaryData?.user?.department?.name : 'Sin departamento'}</Td>
                          <Td>{beneficiaryData?.has ? 'Sí' : 'No'}</Td>
                        </Tr>
                      </>
                    ))
                  ) : (
                    <>
                     <Th>No hay resultado...</Th>
                    </>
                  )}
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
        userData={users}
      />
    </>
  )
}
