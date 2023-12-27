import { TouchableOpacityProps } from 'react-native'
import { PrimaryOrSecondaryType } from 'src/@types/buttonType'
import { ButtonText, Container, Dot } from './styles'

type Props = TouchableOpacityProps & {
  type?: PrimaryOrSecondaryType
  selected: boolean
  text: string
}

export function InDietButton({
  selected,
  type = 'primary',
  text,
  ...rest
}: Props) {
  return (
    <Container selected={selected} type={type} {...rest}>
      <Dot type={type} />

      <ButtonText>
        {text} {selected}
      </ButtonText>
    </Container>
  )
}
