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
import { useUserAuth } from '@/store/auth';
import { MenuComponent } from '@components/menu/Menu';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportPDF from '@components/report/ReportPDF';

export const Beneficiary = () => {

  const {
    beneficiaries,
    beneficiary,
    getAllBeneficiaries
  } = useBeneficiaryStore();
  const {user} = useUserAuth();
  const { users } = useUsers();
  const beneficiaryModal = useDisclosure();
  const initialRef = useRef()
  const finalRef = useRef()

  useEffect(() => {
    getAllBeneficiaries();
  }, [getAllBeneficiaries, beneficiary]);

    // Preparar los datos para el reporte
    const reportData = beneficiaries
    .filter(b => b.has)
    .reduce((acc, b) => {
      const tipo = b.schedule?.schedule;
      const departamento = b.user?.department?.name || 'Sin departamento';
      const key = `${tipo}-${departamento}`;
  
      if (!acc[key]) {
        acc[key] = { tipo, departamento, cantidad: 0 };
      }
      acc[key].cantidad += 1;
  
      return acc;
    }, {});
  
    const reportDataArray = Object.values(reportData);

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
            {user?.role !== 'user' ? (
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
                  {user.role !== 'user' && user.role !== 'managerIT' ? (
                    <TableCaption placement='bottom'>
                      <PDFDownloadLink
                        document={<ReportPDF data={reportDataArray} />}
                        fileName='reporte_beneficiarios.pdf'
                      >
                        {({ loading }) => (
                          <Button size='sm'>
                            {loading ? 'Generando...' : 'Generar Reporte'}
                          </Button>
                        )}
                      </PDFDownloadLink>
                    </TableCaption>
                  ) : (
                    null
                  )}
                  <Thead>
                    <Tr>
                      <Th>Nombre</Th>
                      <Th>Correo</Th>
                      <Th>Departamento</Th>
                      <Th>Dispone</Th>
                      <Th>Beneficio</Th>
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
                            <Td>{beneficiaryData?.schedule?.schedule}</Td>
                            <Td>
                              <MenuComponent 
                                type={'beneficiary'}
                                idBeneficiary={beneficiaryData?._id}
                              />
                            </Td>
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
            ) : (
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Nombre</Th>
                        <Th>Correo</Th>
                        <Th>Departamento</Th>
                        <Th>Dispone</Th>
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
            )}
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
