import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealListType } from './MealStorageDTO'
import { mealGet } from './mealGet'

interface mealAddProps {
  mealId: string
  dateId: string
}

export const mealRemove = async (props: mealAddProps) => {
  try {
    const storedMeals: mealListType[] = await mealGet()

    const index = storedMeals.findIndex((date) => date.id === props.dateId)

    if (storedMeals[index].items.length === 1) {
      storedMeals.splice(index, 1)
    } else {
      const mealIndex = storedMeals[index].items.findIndex(
        (meal) => meal.id === props.mealId
      )

      storedMeals[index].items.splice(mealIndex, 1)
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals))
  } catch (err) {
    throw err
  }
}
