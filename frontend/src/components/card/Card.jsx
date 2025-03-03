import React from 'react'
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Image
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const CardComponent = ({title, description, image, buttonText, routeNavigate }) => {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route);
  }

  return (
   <>
    <SimpleGrid spacing={4} templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'}>
        <Card maxW='sm'>
          <CardHeader>
            <Heading size='md' className='text-center text-red-500'>{title}</Heading>
            <Image
              objectFit='cover'
              src={image}
              alt={title}
              borderRadius='lg'
              className='mt-4'
              boxSize={340}
            />
          </CardHeader>
          <CardBody>
            <Text>{description}</Text>
          </CardBody>
          <CardFooter>
            <Button
              className='w-full hover:bg-red-500! hover:text-white!'
              onClick={() => handleNavigation(routeNavigate)}
            >
              {buttonText}
            </Button>
          </CardFooter>
        </Card>
    </SimpleGrid>
   </>
  )
}
