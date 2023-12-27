import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'

import { mealGetById } from '@storage/meal/mealGetById'
import { MealType } from '@storage/meal/MealStorageDTO'

import { Loading } from '@components/Loading'
import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import { CustomModal } from '@components/CustomModal'
import { Header } from '@components/Header'

import { mealRemove } from '@storage/meal/mealRemove'

import {
  ButtonsContainer,
  Container,
  Content,
  DateTime,
  DateTimeTitle,
  Form,
  MealDescription,
  MealName,
  PencilIcon,
  TrashIcon,
} from './styles'

type RouteParams = {
  mealId: string
  dateId: string
}

export function MealDetails() {
  const [meal, setMeal] = useState<MealType>({
    inDiet: false,
    name: '',
    time: new Date(),
    description: '',
    id: '',
  })
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)

  const route = useRoute()
  const { dateId, mealId } = route.params as RouteParams
  const navigation = useNavigation()

  const handleGetMeal = async () => {
    setLoading(true)
    const currentMeal = await mealGetById({
      dateId,
      mealId,
    })

    setMeal(currentMeal)

    setLoading(false)
  }

  const handleRemoveMeal = () => {
    mealRemove({
      dateId,
      mealId,
    })
    navigation.navigate('home')
    setModalVisible(false)
  }

  const formattedDate = (date: Date) => {
    return format(date, "dd/MM/yyyy à's' HH:mm")
  }

  const handleEditMeal = () => {
    navigation.navigate('register', {
      dateId,
      mealId,
    })
  }

  useEffect(() => {
    handleGetMeal()
  }, [])

  return (
    <Container inDiet={!loading ? meal.inDiet : false} loading={loading}>
      <Header text="Refeição" />
      <Content
        style={loading && { alignItems: 'center', justifyContent: 'center' }}
      >
        {loading ? (
          <Loading />
        ) : (
          <Form>
            <MealName>{meal.name}</MealName>

            <MealDescription>
              {meal.description.trim().length > 0
                ? meal.description
                : 'Sem descrição.'}
            </MealDescription>

            <DateTimeTitle>Data e hora</DateTimeTitle>
            <DateTime>{formattedDate(meal.time)}</DateTime>

            <Badge
              type={meal.inDiet ? 'primary' : 'secondary'}
              text={meal.inDiet ? 'dentro da dieta' : 'fora da dieta'}
            />
          </Form>
        )}

        <ButtonsContainer>
          <Button
            text="Editar refeição"
            icon={<PencilIcon />}
            activeOpacity={0.7}
            onPress={handleEditMeal}
          />

          <Button
            text="Excluir refeição"
            type="secondary"
            icon={<TrashIcon />}
            activeOpacity={0.5}
            onPress={() => setModalVisible(true)}
          />
        </ButtonsContainer>
      </Content>

      <CustomModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        remove={handleRemoveMeal}
        cancel={() => setModalVisible(false)}
      />
    </Container>
  )
}
