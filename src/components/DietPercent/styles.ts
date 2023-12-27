import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type DietPercentButtonTypeProps = 'primary' | 'secondary'

type Props = {
  type: DietPercentButtonTypeProps
}

export const Container = styled(TouchableOpacity)<Props>`
  padding: 20px 16px;
  margin-top: 12px;

  position: relative;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Percent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}

  line-height: 41.6px;

  text-align: center;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  align-self: stretch;
  text-align: center;

  line-height: 18.2px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
