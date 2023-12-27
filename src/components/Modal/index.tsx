import { ModalProps } from 'react-native'

import { Container, ModalContent, ModalTitle } from './styles'

type Props = ModalProps

export function Modal({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <ModalContent>
        <ModalTitle>
          Deseja realmente excluir o registro da refeição?
        </ModalTitle>
      </ModalContent>
    </Container>
  )
}
