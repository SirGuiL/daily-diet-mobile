export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      register: {
        mealId?: string
        dateId?: string
      }
      statistics: undefined
      mealDetails: {
        mealId: string
        dateId: string
      }
      feedback: {
        inDiet: boolean
      }
    }
  }
}
