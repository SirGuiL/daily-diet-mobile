export type MealType = {
  id?: string
  time: Date
  name: string
  description?: string
  inDiet: boolean
}

export type mealListType = {
  id: string
  date: Date
  items: MealType[]
}
