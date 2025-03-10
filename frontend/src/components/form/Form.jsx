import { useEffect, useState } from 'react'
import { useToast, Button, Select, FormControl, FormLabel } from '@chakra-ui/react';
import { FaUserPlus } from "react-icons/fa";
import InputField from '../fields/InputField';
import { useUsers } from '../../store/users';
import { useDepartments } from '../../store/departments';

export const FormComponent = ({titleForm, descriptionForm, buttonTextForm}) => {
  const { postAxiosCreateUser } = useUsers();
  const { departmentsAll, getAxiosAllDepartment } = useDepartments();
  const toast = useToast();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    department: "",
    status: true
  })

  const ROLE = {
    value: {
      user: "user",
      manager: "manager",
      managerIT: "managerIT",
      admin: "admin",
    },
    title: {
      user: "Usuario",
      manager: "Gerente",
      managerIT: "Gerente de TI",
      admin: "Administrador",
    }
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAxiosAllDepartment();
  }, [getAxiosAllDepartment])

  const handleButtonClick = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      if (userData.fullName === "" | userData.email === "" | userData.password === "" | userData.department === "" | userData.role === "") {
        toast({
          title: "No puedes dejar ningún campo en blanco.",
          position: 'top',
          status: 'error',
          isClosable: true,
          duration: 1500
        });
        setLoading(false);

        return
      }

      await postAxiosCreateUser(userData);
      setUserData({
        fullName: "",
        email: "",
        password: "",
        role: "user",
        department: "",
        status: true
      });
      toast({
        title: "Usuario creado con éxito.",
        position: 'top',
        status: 'success',
        isClosable: true,
        duration: 1500
      });
      setLoading(false);

    } catch (error) {
      toast({
        title: `Error al crear el departamento: ${error.message}`,
        description: 'Hubo un error al crear el departamento, contacta a tu administrador',
        position: 'top',
        isClosable: true,
        status: 'success'
      })
      setLoading(false);
      console.log(error);
    }

  }

  return (
    <>
      <div className='w-full flex justify-center'>
        <div className="mt-[1vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] xl:mt-[1vh]">
          <h4 className="mb-5! text-3xl! text-center font-bold text-navy-700">
            {titleForm}
          </h4>
          <p className="mb-9! ml-1 text-base text-center text-gray-600 xl:mb-2.5">
            {descriptionForm}
          </p>
          {/* Nombre Completo*/}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Nombre Completo*"
            placeholder="Nombre Completo..."
            id="fullName"
            type="text"
            value={userData.fullName}
            onChange={event => setUserData({
              ...userData,
              fullName: event.target.value
            })}
          />

          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Correo*"
            placeholder="mail@vtv.com"
            id="email"
            type="email"
            value={userData.email}
            onChange={event => setUserData({
              ...userData,
              email: event.target.value
            })}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Contraseña*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={userData.password}
            onChange={event => setUserData({
              ...userData,
              password: event.target.value
            })}
          />

            <FormControl className='mb-3' isRequired>
              <FormLabel>Roles</FormLabel>
              <Select
                value={userData.role}
                placeholder="Seleccionar Rol"
                onChange={event => setUserData({
                  ...userData,
                  role: event.target.value
                })}
              >
                <option value={ROLE.value.admin}>{ROLE.title.admin}</option>
                <option value={ROLE.value.manager}>{ROLE.title.manager}</option>
                <option value={ROLE.value.managerIT}>{ROLE.title.managerIT}</option>
                <option value={ROLE.value.user}>{ROLE.title.user}</option>
              </Select>
            </FormControl>

          <FormControl className='mb-4'>
            <FormLabel>Departamentos*</FormLabel>
            <Select
              value={userData.department}
              placeholder="Seleccionar Departamento"
              onChange={event => setUserData({
                ...userData,
                department: event.target.value
              })}
            >
              {departmentsAll?.map(item => (
                <option
                  key={item?._id}
                  value={item?._id}
                >
                  {item?.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button className="linear w-full rounded-xl py-[12px] text-base font-medium  transition duration-200"
            onClick={handleButtonClick}
            colorScheme="green"
            leftIcon={<FaUserPlus />}
            isLoading={loading}
          >
            {buttonTextForm}
          </Button>
        </div>
      </div>
    </>
  )
}
