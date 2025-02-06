import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, Box, VStack } from '@chakra-ui/react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    // Aquí iría la lógica para guardar el nuevo usuario
    alert('Registro exitoso');
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

        <FormControl>
          <FormLabel>Confirmar Contraseña</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme su contraseña"
          />
        </FormControl>

        {error && <Box color="red.500">{error}</Box>}

        <Button colorScheme="blue" onClick={handleRegister}>
          Registrarse
        </Button>
      </VStack>
    </Box>
  );
};

export { RegisterForm };
