import { useState } from 'react'

import { Input } from '@components/Input'
import { InDietButton } from '@components/InDietButton'

import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

import {
  Container,
  DateTime,
  DateTimeContainer,
  InDietContainer,
  InputLabel,
} from './styles'
import { ScrollView } from 'react-native'

type Props = {
  selectedInDietButton: PrimaryOrSecondaryType
  setSelectedInDietButton: (type: PrimaryOrSecondaryType) => void
  setMealName: (text: string) => void
  setMealDescription: (text: string) => void
  setDate: (text: string) => void
  setHour: (text: string) => void
  date: string
  hour: string
  mealName: string
  mealDescription: string
}

export function NewMealForm(props: Props) {
  const handlePressInDietButton = (type: PrimaryOrSecondaryType) => {
    props.setSelectedInDietButton(type)
  }

  return (
    <Container>
      <InputLabel>Nome</InputLabel>
      <Input onChangeText={props.setMealName} value={props.mealName} />

      <InputLabel style={{ marginTop: 24 }}>Descrição</InputLabel>
      <Input
        onChangeText={props.setMealDescription}
        value={props.mealDescription}
        textarea
      />

      <DateTimeContainer>
        <DateTime>
          <InputLabel>Data</InputLabel>
          <Input
            onChangeText={props.setDate}
            value={props.date}
            keyboardType="numeric"
            maxLength={10}
          />
        </DateTime>

        <DateTime>
          <InputLabel>Hora</InputLabel>
          <Input
            onChangeText={props.setHour}
            value={props.hour}
            keyboardType="numeric"
            maxLength={5}
          />
        </DateTime>
      </DateTimeContainer>

      <InputLabel>Está dentro da dieta?</InputLabel>

      <InDietContainer>
        <InDietButton
          selected={props.selectedInDietButton === 'primary'}
          text="Sim"
          onPress={() => handlePressInDietButton('primary')}
          activeOpacity={0.8}
        />

        <InDietButton
          type="secondary"
          selected={props.selectedInDietButton === 'secondary'}
          text="Não"
          onPress={() => handlePressInDietButton('secondary')}
          activeOpacity={0.8}
        />
      </InDietContainer>
    </Container>
  )
}
