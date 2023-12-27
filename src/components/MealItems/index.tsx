import { FlatList } from 'react-native'
import { Container, DayTitle } from './styles'
import { MealItem } from '@components/MealItem'
import { MealType } from '@storage/meal/MealStorageDTO'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

type Props = {
  items: MealType[]
  time: Date
  dateId: string
}

export function MealItems({ items, time, dateId }: Props) {
  const navigation = useNavigation()

  const handleOpenItemDetails = (mealId: string) => {
    navigation.navigate('mealDetails', {
      dateId,
      mealId,
    })
  }

  return (
    <Container>
      <DayTitle>{format(time, 'dd.MM.yy')}</DayTitle>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
            inDiet={item.inDiet}
            name={item.name}
            time={item.time}
            onPress={() => handleOpenItemDetails(item.id)}
          />
        )}
        style={{ width: '100%', gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
