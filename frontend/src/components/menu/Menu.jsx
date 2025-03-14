import { useRef, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,

} from '@chakra-ui/react'
import {
  HamburgerIcon,
  DeleteIcon,
  EditIcon,
  IconButton
} from '@chakra-ui/icons'
import { useUserAuth } from '../../store/auth';
import { useDepartments } from "../../store/departments";
import { useBeneficiaryStore } from '../../store/beneficiary';
import { useUsers } from "../../store/users";
import { useSchedule } from '../../store/schedule';


export const MenuComponent = ({type, idDepartment, idBeneficiary, idUser, idSchedule}) => {

  const { user } = useUserAuth();
  const modalEditUser = useDisclosure();
  const { deleteAxiosDepartment } = useDepartments();
  const { deleteBeneficiary } = useBeneficiaryStore();
  const { deleteAxiosUser } = useUsers();
  const { deleteAxiosSchedule } = useSchedule();


  if (type === 'admin') {
    return (
      <>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem
              icon={<EditIcon />}
              onClick={() =>
                modalEditUser.onOpen()
              }

            >
              Editar Usuario
            </MenuItem>
            <MenuItem 
              icon={<DeleteIcon />}
              onClick={async () => await deleteAxiosUser(idUser)}
            >
              Eliminar Usuario
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else if (type === 'department') {
    return (
      <>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem
              icon={<EditIcon />}
              onClick={() =>
                modalEditUser.onOpen()
              }

            >
              Editar Departamento
            </MenuItem>
            <MenuItem 
              icon={<DeleteIcon />}
              onClick={async () => await deleteAxiosDepartment(idDepartment)}  
            >
              Eliminar Departamento
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else if (type === 'schedule') {
    return (
      <>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem
              icon={<EditIcon />}
              onClick={() =>
                modalEditUser.onOpen()
              }

            >
              Editar Horario
            </MenuItem>
            <MenuItem 
              icon={<DeleteIcon />}
              onClick={async () => await deleteAxiosSchedule(idSchedule)}
            >
              Eliminar Horario
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else if (type === 'beneficiary') {
    return (
      <>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem
              icon={<EditIcon />}
              onClick={() =>
                modalEditUser.onOpen()
              }

            >
              Editar Beneficiario
            </MenuItem>
            <MenuItem 
              icon={<DeleteIcon />}
              onClick={async () => await deleteBeneficiary(idBeneficiary)}
            >
              Eliminar Beneficiario
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  }
}
