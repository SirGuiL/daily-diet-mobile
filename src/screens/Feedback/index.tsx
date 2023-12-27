import { useNavigation, useRoute } from '@react-navigation/native'

import { Bold, Container, Description, FeedbackImage, Title } from './style'

import { Button } from '@components/Button'

import PositiveFeedbackImage from '@assets/positive-feedback.png'
import NegativeFeedbackImage from '@assets/negative-feedback.png'

type RouteParams = {
  inDiet: string
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { inDiet } = route.params as RouteParams

  const goToHome = () => {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title type={inDiet ? 'primary' : 'secondary'}>
        {inDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {inDiet ? (
        <Description>
          Você continua <Bold>dentro da dieta</Bold>. Muito bem!
        </Description>
      ) : (
        <Description>
          Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando
          e não desista!
        </Description>
      )}

      <FeedbackImage
        source={inDiet ? PositiveFeedbackImage : NegativeFeedbackImage}
      />

      <Button
        text="Ir para a página inicial"
        style={{ marginTop: 32, width: 191 }}
        onPress={goToHome}
      />
    </Container>
  )
}
