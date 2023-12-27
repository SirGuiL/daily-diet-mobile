import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Feedback } from '@screens/Feedback'
import { Home } from '@screens/Home'
import { MealDetails } from '@screens/MealDetails'
import { RegisterMeal } from '@screens/RegisterMeal'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 100,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="register" component={RegisterMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  )
}
