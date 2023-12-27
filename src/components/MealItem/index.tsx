import { MealType } from '@storage/meal/MealStorageDTO'
import { Container, Divider, Name, Status, Time } from './styles'
import { format } from 'date-fns'
import { TouchableOpacityProps } from 'react-native'

type Props = MealType & TouchableOpacityProps

export function MealItem({ name, time, inDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{format(time, 'HH:mm')}</Time>

      <Divider />

      <Name>{name}</Name>

      <Status inDiet={inDiet} />
    </Container>
  )
}
