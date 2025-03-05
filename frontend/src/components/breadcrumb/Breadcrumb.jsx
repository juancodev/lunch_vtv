import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from "react-router";

export const BreadcrumbComponent = ({route}) => {
  return (
    <>
      <Breadcrumb className='mt-8 mb-10'>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={'/dashboard'}>
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>
            {route}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}
