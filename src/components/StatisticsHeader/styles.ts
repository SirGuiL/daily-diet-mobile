import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  type: 'primary' | 'secondary'
}

export const Container = styled.View`
  position: relative;

  padding: 28px 24px 34px 24px;

  align-items: center;
  justify-content: center;
`

export const Percent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Button = styled.TouchableOpacity`
  padding: 14px;

  position: absolute;
  top: 4px;
  left: 10px;
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``
