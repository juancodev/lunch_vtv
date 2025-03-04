import { useState } from 'react'
import { useToast, Button, Select, FormControl, FormLabel } from '@chakra-ui/react';
import { FaUserPlus } from "react-icons/fa";
import InputField from '../fields/InputField';
import { useUsers } from '../../store/users';

export const FormComponent = ({titleForm, descriptionForm, buttonTextForm}) => {
  const { postAxiosCreateUser } = useUsers();
  const toast = useToast();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    department: "",
    status: true
  })
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState({
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
  });
  const [loading, setLoading] = useState(false);

  console.log(userData)

  const handleButtonClick = (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      if (fullName === "" || email === "" || password === "") {
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

      const data = {
        fullName,
        email,
        password,
        role: "user",
        status: true
      }
    } catch (error) {
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
            placeholder="Juan Montilla"
            id="fullName"
            type="text"
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
            type="text"
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
            onChange={event => setUserData({
              ...userData,
              password: event.target.value
            })}
          />

            <FormControl className='mb-3'>
              <FormLabel>Roles*</FormLabel>
              <Select
                placeholder="Seleccionar Rol"
                onChange={event => setUserData({
                  ...userData,
                  role: event.target.value
                })}
              >
                <option value={role.value.admin}>{role.title.admin}</option>
                <option value={role.value.manager}>{role.title.manager}</option>
                <option value={role.value.managerIT}>{role.title.managerIT}</option>
                <option value={role.value.user}>{role.title.user}</option>
              </Select>
            </FormControl>


          <Button className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium  transition duration-200"
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
