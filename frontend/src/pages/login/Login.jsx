import React, { useState } from 'react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Image, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router';
import { useUserAuth } from '../../store/auth';
import imageLogo from '../../assets/login_logo.png'

const LoginForm = () => {

  const { postAxiosLoginUser } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);

    const data = {
      email,
      password
    }

    try {
      if (data.email === "" | data.password === "") {
        toast({
          title: `Obligatoriamente debes colocar el correo o la contraseña`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        setLoading(false)
      } else {
        await postAxiosLoginUser(data)
        .then(() => {
          navigate('/dashboard')
          setLoading(false)})
      }
    } catch (error) {
      if (error?.response?.data?.message === "Unauthorized") {
        toast({
          title: `El correo o contraseña no son válidos`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
      } else {
        toast({
          title: `${error?.response?.data?.message}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }
      setLoading(false)
    }

    // if (email === 'admin@vtv.com' && password === 'admin123') {
    //   navigate('/dashboard');
    // } else {
    //   setError('Credenciales incorrectas');
    // }
  };


  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center mt-10'>
      <Stack className='w-full flex justify-center items-center py-8'>
        <Image
          objectFit="cover"
          src={imageLogo}
        />
      </Stack>
      <h2 className='text-4xl! font-bold'>Inicia Sesión</h2>

      <Box maxW="sm" mx="auto" mt="10" display="flex" justifyContent="center" alignItems="center">
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su usuario"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </FormControl>

          {error && <Box color="red.500">{error}</Box>}

          <Button
            className='w-full'
            colorScheme="red"
            onClick={handleLogin}
            isLoading={loading}
            loadingText="Ingresando..."
          >
            Iniciar Sesión
          </Button>
          <p className='pt-5'>Sistema Lunch 2025 - Venezolana de Televisión</p>
        </VStack>
      </Box>
    </div>
    </>
  );
};

export {LoginForm};
