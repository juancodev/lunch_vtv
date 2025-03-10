import React from 'react';
import { useUserAuth } from '../../store/auth';
import { CardComponent } from '../../components/card/Card';
import { SimpleGrid } from '@chakra-ui/react';
import imageAdmin from '../../assets/50709.jpg';
import imageDepartaments from '../../assets/departaments.jpg';
import imageBeneficiaries from '../../assets/beneficiaries.jpg';
import imageSchedules from '../../assets/schedules.jpeg';
import imageMenu from '../../assets/menu.jpg';

export const Dashboard = () => {
  const { user } = useUserAuth()

  const cardConfig = {
    admin: [
      {
        title: "Administrar Usuarios",
        description: "Gestiona usuarios del sistema y cuales son sus roles.",
        image: imageAdmin,
        buttonText: "Ver más",
        routeNavigate: "/users"
      },
      {
        title: "Departamentos",
        description: "Revisar departamentos en el sistema para su gestión.",
        image: imageDepartaments,
        buttonText: "Ver más",
        routeNavigate: "/departments"
      },
      {
        title: "Beneficiarios",
        description: "Lista de departamentos beneficiarios para los almuerzos en la institución.",
        image: imageBeneficiaries,
        buttonText: "Ver más",
        routeNavigate: "/beneficiaries"
      },
      {
        title: "Horarios",
        description: "Gestiona los horarios para los almuerzos en la institución.",
        image: imageSchedules,
        buttonText: "Ver más",
        routeNavigate: "/schedules"
      },
      {
        title: "Menú",
        description: "Agrega o modifica el menú del día para que todos los beneficiarios puedan visualizarlo.",
        image: imageMenu,
        buttonText: "Ver más"
      }
    ],
    manager: [
      {
        title: "Beneficiarios",
        description: "Lista de departamentos beneficiarios para los almuerzos en la institución.",
        image: imageBeneficiaries,
        buttonText: "Ver más",
        routeNavigate: "/beneficiaries"
      },
      {
        title: "Departamentos",
        description: "Revisar departamentos en el sistema para su gestión.",
        image: imageDepartaments,
        buttonText: "Ver más",
        routeNavigate: "/departments"
      },
      {
        title: "Horarios",
        description: "Gestiona los horarios para los almuerzos en la institución.",
        image: imageSchedules,
        buttonText: "Ver más",
        routeNavigate: "/schedules"
      },
      {
        title: "Menú",
        description: "Agrega o modifica el menú del día para que todos los beneficiarios puedan visualizarlo.",
        image: imageMenu,
        buttonText: "Ver más"
      }
    ],
    managerIT: [
      {
        title: "Beneficiarios",
        description: "Lista de departamentos beneficiarios para los almuerzos en la institución.",
        image: imageBeneficiaries,
        buttonText: "Ver más",
        routeNavigate: "/beneficiaries"
      },
      {
        title: "Departamentos",
        description: "Revisar departamentos en el sistema para su gestión.",
        image: imageDepartaments,
        buttonText: "Ver más",
        routeNavigate: "/departments"
      },
      {
        title: "Horarios",
        description: "Gestiona los horarios para los almuerzos en la institución.",
        image: imageSchedules,
        buttonText: "Ver más",
        routeNavigate: "/schedules"
      },
      {
        title: "Menú",
        description: "Agrega o modifica el menú del día para que todos los beneficiarios puedan visualizarlo.",
        image: imageMenu,
        buttonText: "Ver más"
      }
    ],
    user: [
      {
        title: "Horarios",
        description: "Gestiona los horarios para los almuerzos en la institución.",
        image: imageSchedules,
        buttonText: "Ver más",
        routeNavigate: "/schedules"
      },
      {
        title: "Menú",
        description: "Agrega o modifica el menú del día para que todos los beneficiarios puedan visualizarlo.",
        image: imageMenu,
        buttonText: "Ver más"
      }
    ],
  }

  const userCards = cardConfig[user.role] || []

  return (
    <>
      <h1 className='text-5xl text-center pt-10'>Bienvenido, {user.fullName}</h1>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} p={5}>
        {userCards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </SimpleGrid>
    </>
  )
}