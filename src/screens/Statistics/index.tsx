import { useEffect, useState } from 'react'

import { StatisticsHeader } from '@components/StatisticsHeader'

import { mealGet } from '@storage/meal/mealGet'
import { MealType, mealListType } from '@storage/meal/MealStorageDTO'

import {
  Box,
  BoxContainer,
  BoxDescription,
  BoxNumber,
  Boxes,
  Container,
  Content,
  SectionTitle,
} from './styles'
import { Loading } from '@components/Loading'
import { View } from 'react-native'

type StatisticsType = {
  bestSequence: number
  total: number
  inDiet: number
  offDiet: number
}

export function Statistics() {
  const [dietPercent, setDietPercent] = useState<number>(0)
  const [meals, setMeals] = useState<mealListType[]>([])
  const [dietStatistics, setDietStatistics] = useState<StatisticsType>({
    bestSequence: 0,
    inDiet: 0,
    offDiet: 0,
    total: 0,
  })
  const [loading, setLoading] = useState<boolean>(true)

  const getMeals = async () => {
    setLoading(true)

    try {
      const storedMeals = await mealGet()

      setMeals(storedMeals)

      calcDietPercent()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const calcDietPercent = async () => {
    try {
      if (meals.length === 0) {
        setDietPercent(0)
        return
      }

      let totalMeals: MealType[] = []

      meals.map((dailyMeals) => {
        totalMeals = [...totalMeals, ...dailyMeals.items]
      })

      const dietTotalMeals = totalMeals.filter((meal) => meal.inDiet)

      setDietPercent((dietTotalMeals.length / totalMeals.length) * 100)
    } catch (err) {
      console.error(err)
    }
  }

  const calcStatistics = async () => {
    try {
      let totalMeals: MealType[] = []

      for (let x = 0; x < meals.length; x++) {
        totalMeals = [...totalMeals, ...meals[x].items]
      }

      let highStreak = 0
      let counter = 0

      totalMeals.map(async (meal) => {
        if (meal.inDiet) {
          counter++

          if (counter > highStreak) {
            highStreak = counter
          }
        } else {
          counter = 0
        }
      })

      const statistics: StatisticsType = {
        total: totalMeals.length,
        bestSequence: highStreak,
        inDiet: totalMeals.filter((meal) => meal.inDiet).length,
        offDiet: totalMeals.filter((meal) => !meal.inDiet).length,
      }

      setDietStatistics(statistics)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    calcDietPercent()
    calcStatistics()
  }, [meals])

  useEffect(() => {
    getMeals()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container type={dietPercent >= 75 ? 'primary' : 'secondary'}>
          <StatisticsHeader
            type={dietPercent >= 75 ? 'primary' : 'secondary'}
            percent={dietPercent}
          />
          <Content>
            <SectionTitle>Estatísticas gerais</SectionTitle>

            <Boxes>
              <Box>
                <BoxNumber>{dietStatistics.bestSequence}</BoxNumber>

                <BoxDescription>
                  melhor sequência de pratos dentro da dieta
                </BoxDescription>
              </Box>

              <Box>
                <BoxNumber>{dietStatistics.total}</BoxNumber>

                <BoxDescription>refeições registradas</BoxDescription>
              </Box>

              <BoxContainer>
                <Box type="primary" style={{ flex: 1 }}>
                  <BoxNumber>{dietStatistics.inDiet}</BoxNumber>

                  <BoxDescription>refeições dentro da dieta</BoxDescription>
                </Box>

                <Box type="secondary" style={{ flex: 1 }}>
                  <BoxNumber>{dietStatistics.offDiet}</BoxNumber>

                  <BoxDescription>refeições fora da dieta</BoxDescription>
                </Box>
              </BoxContainer>
            </Boxes>
          </Content>
        </Container>
      )}
    </>
  )
}
