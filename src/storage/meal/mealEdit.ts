import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealType, mealListType } from './MealStorageDTO'
import { mealGet } from './mealGet'

interface mealAddProps {
  mealId: string
  dateId: string
  meal: MealType
}

export const mealEdit = async (props: mealAddProps) => {
  try {
    const storedMeals: mealListType[] = await mealGet()

    const index = storedMeals.findIndex((date) => date.id === props.dateId)

    if (storedMeals[index].items.length === 1) {
      storedMeals[index].items[0].description = props.meal.description
      storedMeals[index].items[0].name = props.meal.name
      storedMeals[index].items[0].inDiet = props.meal.inDiet
      storedMeals[index].items[0].time = props.meal.time
    } else {
      const mealIndex = storedMeals[index].items.findIndex(
        (meal) => meal.id === props.mealId
      )

      storedMeals[index].items[mealIndex].description = props.meal.description
      storedMeals[index].items[mealIndex].name = props.meal.name
      storedMeals[index].items[mealIndex].inDiet = props.meal.inDiet
      storedMeals[index].items[mealIndex].time = props.meal.time
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals))
  } catch (err) {
    throw err
  }
}
