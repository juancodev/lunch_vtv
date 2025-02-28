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
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const CardComponent = ({title, description, image, buttonText, routeNavigate }) => {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route);
  }

  return (
   <>
    <SimpleGrid spacing={4} templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}>
        <Card>
          <CardHeader>
            <Heading size='md'>{title}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{description}</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => handleNavigation(routeNavigate)}>{buttonText}</Button>
          </CardFooter>
        </Card>
    </SimpleGrid>
   </>
  )
}
