import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, Box, VStack } from '@chakra-ui/react';
// import { useHistory } from 'react-router';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      history.push('/dashboard');  // Redirige al dashboard
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
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

        <Button colorScheme="blue" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </VStack>
    </Box>
  );
};

export {LoginForm};
