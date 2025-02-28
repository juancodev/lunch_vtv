import React from 'react'
import { NavBar } from '../../components/nav/Nav'
import { useUserAuth } from '../../store/users'
import { CardComponent } from '../../components/card/Card'
import { SimpleGrid } from '@chakra-ui/react'

export const Dashboard = () => {
  const { user } = useUserAuth()

  const cardConfig = {
    admin: [
      {
        title: "Administrar Usuarios",
        description: "Gestiona usuarios",
        buttonText: "Ver más",
        routeNavigate: "/users"
      },
      { title: "Departamentos", description: "Revisar departamentos", buttonText: "Ver más" },
      { title: "Beneficiarios", description: "lista de beneficiarios", buttonText: "Ver más" },
      { title: "Horarios", description: "Gestiona los horarios", buttonText: "Ver más" },
    ],
    user: [
      { title: "Mis Compras", description: "Historial de compras", buttonText: "Ver más" },
      { title: "Soporte", description: "Centro de ayuda", buttonText: "Contactar" },
    ],
  }

  const userCards = cardConfig[user.role] || []

  return (
    <>
      <NavBar />
      <h1 className='text-5xl text-center pt-10'>Bienvenido, {user.fullName}</h1>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} p={5}>
        {userCards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </SimpleGrid>
    </>
  )
}