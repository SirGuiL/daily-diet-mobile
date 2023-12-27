import { PencilLine, Trash } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: boolean
  loading: boolean
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, inDiet, loading }) =>
    loading
      ? theme.COLORS.WHITE
      : inDiet
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: flex-start;

  padding: 40px 24px;

  border-radius: 20px 20px 0px 0px;
`

export const Form = styled.View`
  flex: 1;
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}

  align-self: stretch;
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin-top: 8px;
`

export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-top: 24px;
`

export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin: 8px 0 24px 0;
`

export const ButtonsContainer = styled.View`
  width: 100%;
  gap: 9px;
`

export const PencilIcon = styled(PencilLine).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.FONT_SIZE.LG,
}))``

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_1,
  size: theme.FONT_SIZE.LG,
}))``
