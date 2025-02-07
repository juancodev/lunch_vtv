import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, Box, VStack } from '@chakra-ui/react';
import { Image, Stack } from '@chakra-ui/react'
// import { useHistory } from 'react-router';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      //history.push('/dashboard');  // Redirige al dashboard
      console.log('Funciona');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center mt-10'>
      <Stack className='w-full flex justify-center items-center py-8'>
        <Image
          objectFit="cover"
          src="https://seeklogo.com/images/V/VENEZOLANA_DE_TELEVISION-logo-02E35AB2EA-seeklogo.com.png"
        />
      </Stack>
      <h2 className='text-4xl! font-bold'>Inicia Sesión</h2>

      <Box maxW="sm" mx="auto" mt="10" display="flex" justifyContent="center" alignItems="center">
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <Button className='w-full' colorScheme="red" onClick={handleLogin}>
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
