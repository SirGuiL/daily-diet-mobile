import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { format, formatISO, parse, parseISO, set } from 'date-fns'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'
import { NewMealForm } from '@components/NewMealForm'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'

import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

import { DateTimeUtils } from '@utils/DateTimeUtils'

import { mealAdd } from '@storage/meal/mealAdd'
import { mealGetById } from '@storage/meal/mealGetById'
import { mealEdit } from '@storage/meal/mealEdit'

import { Container, Content } from './styles'

type RouteParams = {
  mealId?: string
  dateId?: string
}

export function RegisterMeal() {
  const [loading, setLoading] = useState(true)
  const [mealName, setMealName] = useState<string>('')
  const [mealDescription, setMealDescription] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [selectedInDietButton, setSelectedInDietButton] =
    useState<PrimaryOrSecondaryType>()

  const navigation = useNavigation()
  const route = useRoute()
  const { dateId, mealId } = route.params as RouteParams

  const handleAddNewMeal = async () => {
    try {
      if (mealName.trim().length === 0) {
        return Alert.alert(
          'Adicionar refeição',
          'O campo de nome deve ser preenchido para cadastrar essa refeição.'
        )
      }

      if (!['primary', 'secondary'].includes(selectedInDietButton)) {
        return Alert.alert(
          'Adicionar refeição',
          'Você deve selecionar se a refeição está na dieta para cadastrar essa refeição.'
        )
      }

      if (date.trim().length > 0 && date.trim().length < 10) {
        return Alert.alert(
          'Adicionar refeição',
          'Você deve digitar uma data válida para cadastrar essa refeição.'
        )
      }

      const isValidHour = await DateTimeUtils.isValidHour(hour)

      if ((hour.trim().length > 0 && hour.trim().length < 5) || !isValidHour) {
        return Alert.alert(
          'Adicionar refeição',
          'Você deve digitar uma hora válida para cadastrar essa refeição.'
        )
      }

      let selectedDate: Date

      if (date.trim().length == 0) {
        selectedDate = parseISO(formatISO(new Date()))
      } else {
        selectedDate = parse(date, 'dd/MM/yyyy', new Date())
      }

      const dateWithHour = set(selectedDate, {
        hours: Number(hour.substring(0, 2)),
        minutes: Number(hour.substring(3, 5)),
      })

      if (dateId && mealId) {
        mealEdit({
          dateId,
          mealId,
          meal: {
            inDiet: selectedInDietButton === 'primary',
            name: mealName,
            time: dateWithHour,
            description: mealDescription,
          },
        })
      } else {
        mealAdd({
          date: selectedDate,
          meal: {
            inDiet: selectedInDietButton === 'primary',
            name: mealName,
            time: dateWithHour,
            description: mealDescription,
            id: uuidv4(),
          },
        })
      }

      navigation.navigate('feedback', {
        inDiet: selectedInDietButton === 'primary',
      })
    } catch (err) {
      console.error(err)
      Alert.alert('Adicionar refeição', 'Erro ao adicionar essa refeição.')
    }
  }

  const formatDate = () => {
    const number = date.replace(/\D/g, '')

    if (number.length == 8) {
      const formattedDate = `${number.substring(0, 2)}/${number.substring(
        2,
        4
      )}/${number.substring(4)}`

      setDate(formattedDate)
    }
  }

  const formatHour = () => {
    const number = hour.replace(/\D/g, '')

    if (number.length == 4) {
      const formattedHour = `${number.substring(0, 2)}:${number.substring(
        2,
        4
      )}`

      setHour(formattedHour)
    }
  }

  const getCurrentMeal = async () => {
    setLoading(true)
    const currentMeal = await mealGetById({
      dateId,
      mealId,
    })

    setMealName(currentMeal.name)
    setMealDescription(currentMeal.description)
    setDate(format(currentMeal.time, 'dd/MM/yyyy'))
    setHour(format(currentMeal.time, 'HH:mm'))
    setSelectedInDietButton(currentMeal.inDiet ? 'primary' : 'secondary')

    setLoading(false)
  }

  useEffect(() => {
    if (dateId && mealId) {
      getCurrentMeal()
    } else {
      setLoading(false)
    }

    formatDate()
    formatHour()
  }, [date, hour])

  return (
    <Container>
      <Header text={dateId && mealId ? 'Editar refeição' : 'Nova refeição'} />

      {loading ? (
        <Loading />
      ) : (
        <Content>
          <NewMealForm
            selectedInDietButton={selectedInDietButton}
            setSelectedInDietButton={setSelectedInDietButton}
            setMealName={setMealName}
            setMealDescription={setMealDescription}
            date={date}
            hour={hour}
            mealName={mealName}
            mealDescription={mealDescription}
            setDate={setDate}
            setHour={setHour}
          />

          <Button
            text={dateId && mealId ? 'Salvar alterações' : 'Cadastrar refeição'}
            onPress={handleAddNewMeal}
            activeOpacity={0.7}
          />
        </Content>
      )}
    </Container>
  )
}
