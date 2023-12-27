import { SafeAreaView } from 'react-native-safe-area-context'
import { PrimaryOrSecondaryType } from 'src/@types/buttonType'
import styled, { css } from 'styled-components/native'

type Props = {
  type: PrimaryOrSecondaryType
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'primary'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}

  text-align: center;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  text-align: center;
  margin-top: 8px;
`

export const Bold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  text-align: center;
`

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;

  margin-top: 40px;
`
