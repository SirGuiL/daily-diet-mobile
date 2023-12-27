import { Modal, ModalProps } from 'react-native'

import { ButtonsContainer, Container, ModalContent, ModalTitle } from './styles'
import { Button } from '@components/Button'

type Props = ModalProps & {
  remove: () => void
  cancel: () => void
}

export function CustomModal({ cancel, remove, ...rest }: Props) {
  return (
    <Modal {...rest}>
      <Container>
        <ModalContent>
          <ModalTitle>
            Deseja realmente excluir o registro da refeição?
          </ModalTitle>

          <ButtonsContainer>
            <Button
              text="Cancelar"
              type="secondary"
              style={{ flex: 1 }}
              onPress={cancel}
            />

            <Button text="Sim, exluir" style={{ flex: 1 }} onPress={remove} />
          </ButtonsContainer>
        </ModalContent>
      </Container>
    </Modal>
  )
}
