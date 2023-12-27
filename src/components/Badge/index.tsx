import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

import { BadgeText, Container, Dot } from './styles'

type Props = {
  type: PrimaryOrSecondaryType
  text: string
}

export function Badge({ type, text }: Props) {
  return (
    <Container>
      <Dot type={type} />

      <BadgeText>{text}</BadgeText>
    </Container>
  )
}
