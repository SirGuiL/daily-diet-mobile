import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  position: relative;

  width: 100%;
  padding: 24px;

  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
  left: 24px;
`

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``
