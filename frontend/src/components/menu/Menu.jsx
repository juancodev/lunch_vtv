import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  AddIcon,
  DeleteIcon,
  EditIcon,
  IconButton
} from '@chakra-ui/icons'

export const MenuComponent = () => {
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
          <MenuItem icon={<AddIcon />}>
            Asignar Departamento
          </MenuItem>
          <MenuItem icon={<EditIcon />}>
            Editar Usuario
          </MenuItem>
          <MenuItem icon={<DeleteIcon />}>
            Eliminar Usuario
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
