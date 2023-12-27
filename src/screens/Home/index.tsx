import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { HomeHeader } from '@components/HomeHeader'
import { DietPercent } from '@components/DietPercent'
import { Button } from '@components/Button'
import { MealItems } from '@components/MealItems'

import { MealType, mealListType } from '@storage/meal/MealStorageDTO'
import { mealGet } from '@storage/meal/mealGet'

import { Container, MealsText } from './styles'

export function Home() {
  const [dietPercent, setDietPercent] = useState<number>(0)
  const [meals, setMeals] = useState<mealListType[]>([])

  const navigation = useNavigation()

  const calcDietPercent = () => {
    try {
      if (meals.length === 0) {
        setDietPercent(0)
        return
      }

      let totalMeals: MealType[] = []

      meals.map((dailyMeals) => {
        totalMeals = [...totalMeals, ...dailyMeals.items]
      })

      const dietTotalMeals = totalMeals.filter((meal) => meal.inDiet)

      setDietPercent((dietTotalMeals.length / totalMeals.length) * 100)
    } catch (err) {
      console.error(err)
    }
  }

  const handleOpenStatisticsScreen = () => {
    navigation.navigate('statistics')
  }

  const getMeals = async () => {
    const storedMeals = await mealGet()
    setMeals(storedMeals)

    calcDietPercent()
  }

  const handleOpenAddNewMealScreen = () => {
    navigation.navigate('register', {
      dateId: '',
      mealId: '',
    })
  }

  useEffect(() => {
    getMeals()
  }, [meals])

  return (
    <Container>
      <HomeHeader />

      <DietPercent percent={dietPercent} onPress={handleOpenStatisticsScreen} />

      <MealsText>Refeições</MealsText>

      <Button
        icon="add"
        text="Nova refeição"
        onPress={handleOpenAddNewMealScreen}
      />

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItems items={item.items} time={item.date} dateId={item.id} />
        )}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
