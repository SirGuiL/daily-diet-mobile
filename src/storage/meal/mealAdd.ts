import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealType, mealListType } from './MealStorageDTO'
import { mealGet } from './mealGet'
import { format } from 'date-fns'

interface mealAddProps {
  meal: MealType
  date: Date
}

export const mealAdd = async (props: mealAddProps) => {
  try {
    const storedMeals: mealListType[] = await mealGet()

    const newMeal: MealType = {
      id: uuidv4(),
      inDiet: props.meal.inDiet,
      name: props.meal.name,
      description: props.meal.description,
      time: props.meal.time,
    }

    const filteredByDateMeals = storedMeals.find(
      (meal) =>
        format(meal.date, 'dd/MM/yyyy') === format(props.date, 'dd/MM/yyyy')
    )

    if (filteredByDateMeals) {
      filteredByDateMeals.items.push(newMeal)
    } else {
      storedMeals.push({
        date: props.date,
        id: uuidv4(),
        items: [newMeal],
      })
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals))
  } catch (err) {
    throw err
  }
}
