import { mealGet } from './mealGet'
import { mealListType } from './MealStorageDTO'

interface mealGetByIdProps {
  dateId: string
  mealId: string
}

export const mealGetById = async (props: mealGetByIdProps) => {
  try {
    const totalMeals: mealListType[] = await mealGet()

    const currentDate = totalMeals.find((dates) => dates.id === props.dateId)

    const meal = currentDate.items.find((meal) => meal.id === props.mealId)

    return meal
  } catch (err) {
    throw err
  }
}
