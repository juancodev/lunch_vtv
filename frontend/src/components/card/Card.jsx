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

export const CardComponent = ({title, description, image, buttonText, }) => {
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
            <Button>{buttonText}</Button>
          </CardFooter>
        </Card>
    </SimpleGrid>
   </>
  )
}
