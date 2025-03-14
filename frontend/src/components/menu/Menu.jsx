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
import { useUserAuth } from '@/store/auth';


export const MenuComponent = ({type}) => {

  const { user } = useUserAuth();
  const modalEditUser = useDisclosure();

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
            <MenuItem icon={<DeleteIcon />}>
              Eliminar Usuario
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else if (type === 'department') {
    return
  } else if (type === 'schedule') {
    return
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
            <MenuItem icon={<DeleteIcon />}>
              Eliminar Beneficiario
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  }
}
