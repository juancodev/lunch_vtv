import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'

export const ModalComponent = ({
    section,
    isOpen,
    onOpen,
    onClose,
    initialRef,
    finalRef,
    title
  }) => {

    if (section === 'department') {
      return (
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Nombre del Departamento</FormLabel>
                  <Input ref={initialRef} placeholder='Recursos Humanos...' />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='green' mr={3}>
                  Guardar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
}
