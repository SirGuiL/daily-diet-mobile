import { useNavigation } from '@react-navigation/native'
import { Button, Container, Icon, PageTitle } from './styles'

type Props = {
  text: string
}

export function Header({ text }: Props) {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Button onPress={handleGoBack}>
        <Icon />
      </Button>

      <PageTitle>{text}</PageTitle>
    </Container>
  )
}
