import { useNavigation } from '@react-navigation/native'

import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

import { Container, Icon, Percent, Description, Button } from './styles'

type Props = {
  type: PrimaryOrSecondaryType
  percent: number
}

export function StatisticsHeader({ type, percent }: Props) {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Button onPress={handleGoBack}>
        <Icon type={type} />
      </Button>

      <Percent>{percent.toFixed(2)}%</Percent>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
