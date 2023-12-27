import { TouchableOpacityProps } from 'react-native'
import { Container, Description, Icon, Percent } from './styles'

type Props = TouchableOpacityProps & {
  percent: number
}

export function DietPercent({ percent, ...rest }: Props) {
  return (
    <Container type={percent >= 75 ? 'primary' : 'secondary'} {...rest}>
      <Percent>{percent.toFixed(2)}%</Percent>

      <Description>das refeições dentro da dieta</Description>

      <Icon type={percent >= 75 ? 'primary' : 'secondary'} />
    </Container>
  )
}
