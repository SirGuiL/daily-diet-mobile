import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealListType } from './MealStorageDTO'
import { compareDesc } from 'date-fns'

export const mealGet = async () => {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`)

    const meals: mealListType[] = storage ? JSON.parse(storage) : []

    if (meals.length > 1) {
      const sortedMeals = await meals.sort((a, b) =>
        compareDesc(a.date, b.date)
      )

      return sortedMeals
    } else {
      return meals
    }
  } catch (err) {
    throw err
  }
}
